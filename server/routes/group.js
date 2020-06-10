const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
const {
  createGroup,
  getGroups,
  addMember,
  leaveGroup,
} = require("../functions/group");

router.post("/", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const group = await createGroup(userId, req.body);
    res.created(group);
  } catch (e) {
    res.internalServerError();
  }
});

router.post("/members", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const success = await addMember(userId, req.body);
    if (success) res.ok();
    else res.badRequest();
  } catch (e) {
    res.internalServerError();
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const groups = await getGroups(userId);
    res.ok(groups);
  } catch (e) {
    res.internalServerError();
  }
});

router.get("/:groupId/leave", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const groupId = req.params.groupId;
    const success = await leaveGroup(userId, groupId);

    if (success === true) res.ok();
    else res.badRequest();
  } catch (e) {
    res.internalServerError();
  }
});

module.exports = router;
