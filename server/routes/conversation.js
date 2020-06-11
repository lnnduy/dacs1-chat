const router = require("express").Router();
const { auth } = require("../middleware/auth");
const { getConversations } = require("../functions/conversation");

router.get("/", auth, async (req, res) => {
  const userId = req.user._id;
  const conversations = await getConversations(userId);
  res.ok(conversations);
});

module.exports = router;
