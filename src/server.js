import http from "http";
import SocketIO from "socket.io";
import express from "express";

const app = express();

// Express 앱에 Pug 템플릿 엔진을 설정
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

// /public 경로로 요청이 오면
// 해당 디렉토리에서 정적 파일(JavaScript, CSS, 이미지 등)을 제공
app.use("/public", express.static(__dirname + "/public"));

// 라우팅
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

// 연결 이벤트
wsServer.on("connection", (socket) => {
  // 방 입장
  socket.on("join_room", (roomName) => {
    socket.join(roomName);
    socket.to(roomName).emit("welcome");
  });
  // 오퍼 및 대답
  socket.on("offer", (offer, roomName) => {
    socket.to(roomName).emit("offer", offer);
  });
  socket.on("answer", (answer, roomName) => {
    socket.to(roomName).emit("answer", answer);
  });
  // ICE 후보
  socket.on("ice", (ice, roomName) => {
    socket.to(roomName).emit("ice", ice);
  });
});

// 서버 시작
const handleListen = () => console.log(`Listening on http://localhost:3000`);
httpServer.listen(3000, handleListen);
