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

app.use((req, res, next) => {
  res.ok = (data) => {
    res.status(200).json(data);
  };
  res.created = (data) => {
    res.status(201).json(data);
  };
  res.noContent = (data) => {
    res.status(204).json(data);
  };
  res.badRequest = (data) => {
    res.status(400).json(data);
  };
  res.Unauthorize = (data) => {
    res.status(401).json(data);
  };
  res.forbid = (data) => {
    res.status(403).json(data);
  };
  res.notFound = (data) => {
    res.status(404).json(data);
  };
  res.internalServerError = (data) => {
    res.status(500).json(data);
  };
  next();
});

app.use("/api/users", require("./routes/users"));
app.use("/api/groups", require("./routes/group"));

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
