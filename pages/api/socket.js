import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  console.log("called API")
  if (res.socket.server.io) {
    console.log("socket is already running");
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("connected to server");
    });
  }
  res.end()
};
export default SocketHandler
