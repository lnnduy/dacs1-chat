const router = require("express").Router();
const { auth } = require("../middleware/auth");
const {
  getConversations,
  deletePrivateConversation,
  deleteGroupConversation,
} = require("../functions/conversation");

router.get("/", auth, async (req, res) => {
  const userId = req.user._id;
  const conversations = await getConversations(userId);
  res.ok(conversations);
});

router.delete("/groupConversations/:conversationId", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const { conversationId } = req.params;
    const result = await deleteGroupConversation(userId, conversationId);

    if (result === true) res.ok();
    else res.badRequest();
  } catch (err) {
    console.log(err);
    res.internalServerError();
  }
});

router.delete(
  "/privateConversations/:conversationId",
  auth,
  async (req, res) => {
    try {
      const userId = req.user._id;
      const { conversationId } = req.params;
      const result = await deletePrivateConversation(userId, conversationId);

      if (result === true) res.ok();
      else res.badRequest();
    } catch (err) {
      console.log(err);
      res.internalServerError();
    }
  }
);

module.exports = router;
