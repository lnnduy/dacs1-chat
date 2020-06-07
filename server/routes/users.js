const express = require("express");
const router = express.Router();
const User = require("../models/User");

const { auth } = require("../middleware/auth");
const {
  sendAddContactRequest,
  getAddContactRequestsReceived,
  getAddContactRequestsSent,
  getContacts,
} = require("../functions/user");

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    avatar: req.user.avatar,
  });
});

router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_authExp", user.tokenExp);
        res
          .cookie("w_auth", user.token)
          .status(200)
          .json({
            loginSuccess: true,
            userId: user._id,
            isAdmin: user.role === 0 ? false : true,
            isAuth: true,
            email: user.email,
            name: user.name,
            lastname: user.lastname,
            role: user.role,
            avatar: user.avatar,
          });
      });
    });
  });
});

router.post("/contacts/addContactRequests", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const success = await sendAddContactRequest(userId, req.body);

    if (success) {
      res.ok();
    } else {
      res.badRequest();
    }
  } catch (err) {
    console.log(err);
    res.internalServerError();
  }
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "", tokenExp: "" },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});

router.get("/contacts/addContactRequests/sent", auth, async (req, res) => {
  const userId = req.user._id;
  const requests = await getAddContactRequestsSent(userId);

  if (requests === false) res.badRequest();
  else res.ok(requests);
});

router.get("/contacts/addContactRequests/received", auth, async (req, res) => {
  const userId = req.user._id;
  const requests = await getAddContactRequestsReceived(userId);

  if (requests === false) res.badRequest();
  else res.ok(requests);
});

router.get("/contacts", auth, async (req, res) => {
  const userId = req.user._id;
  const contacts = await getContacts(userId);

  if (contacts === false) res.badRequest();
  else res.ok(contacts);
});

module.exports = router;
