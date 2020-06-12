const router = require("express").Router();
const { auth } = require("../middleware/auth");
const { getGroupMessages } = require("../functions/message");

router.get("/groupConversations/:conversationId", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const { conversationId } = req.params;
    const { page } = req.query;

    const result = await getGroupMessages(userId, conversationId, page);

    res.ok(result);
  } catch (err) {
    console.log(err);
    res.ok([]);
  }
});

module.exports = router;
