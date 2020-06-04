const Router = require("express").Router;

const { auth } = require("../middleware/auth");
const {
  getConversations,
  addMessageToGroup,
} = require("../functions/conversation");

const router = Router();

router.get("/", auth, async (req, res) => {
  try {
    const groupConversations = await getConversations(req.user._id);
    res.json(groupConversations);
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

router.post("/test", auth, async (req, res) => {
  try {
    const { conversationId, messageData } = req.body;

    const conversation = await addMessageToConversation(
      req.user._id,
      conversationId,
      messageData
    );

    res.json(conversation);
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

module.exports = router;
