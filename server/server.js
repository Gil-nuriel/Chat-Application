const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const socketio = require("socket.io");

//define the real time server
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const users = [];

//integrate socket.io
io.on("connection", socket => {
  socket.on("join", userName => {
    socket.emit("chat-message", userName);
    socket.broadcast.emit("user-joined", userName);
    users[socket.id] = userName;
  });
  socket.on("user-message", (message, userName) => {
    socket.emit("my-message", { message });
    socket.broadcast.emit("broadcast-message", { message, userName });
  });
  socket.on("typing", userName => {
    socket.broadcast.emit("who-typing", userName);
  });
  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
    socket.disconnect();
  });
});

//load environment variables
dotenv.config({ path: "./.env" });

//middlewares
app.use(express.json());
app.use(cors());
app.use("/chat", require("./routes/joinRoom"));
app.use("/register", require("./routes/users"));
app.use("/login", require("./routes/login"));

//conect to mongoose
mongoose
  .connect(process.env.MongoDB_Key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(console.log("connected to mongoDB"))
  .catch(err => console.log(err));

//connect to server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("listening on port " + PORT));
