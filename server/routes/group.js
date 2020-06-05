const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
const { createGroup, getGroups, addMember } = require("../functions/group");

router.post("/", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const group = await createGroup(userId, req.body);
    res.created(group);
  } catch (e) {
    res.internalServerError({ error: true });
  }
});

router.post("/members", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const success = await addMember(userId, req.body);
    if (success) res.ok({ success: true });
    else res.ok({ success: false });
  } catch (e) {
    res.internalServerError({ error: true });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const groups = await getGroups(userId);
    res.ok(groups);
  } catch (e) {
    res.internalServerError({ error: true });
  }
});

module.exports = router;
