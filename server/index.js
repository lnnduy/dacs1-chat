const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const cors = require("cors");

const server = http.createServer(app);
const io = require("socket.io")(server);

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

io.on("connection", (socket) => {
  console.log("One user connected");
});

const mongoose = require("mongoose");
const connect = mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/users", require("./routes/users"));
app.use("/api/conversations", require("./routes/conversation"));

app.use("/uploads", express.static("uploads"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
