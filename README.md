# ZOOM 코딩

> ZOOM Clone using NodeJS, WebRTC and WebSockets

<br>

- `설정`

```
npm init -y
npm i nodemon -D
npm i @babel/core @babel/cli @babel/node -D
npm i @babel/preset-env -D
npm i express
npm i pug
npm i ws
```

<br>

- `실행`

```
// terminal
npm run dev

// web
http://localhost:3000/
```

<br>

- `학습내용`

  - node.js

  ```
  Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임
  기본적으로 JavaScript를 브라우저 외부에서 실행


  (특징)
  1) 비동기 I/O 처리
      ㄴ> 이벤트 루프와 함께 비동기적인 태스크 처리를 지원
  2) 단일 스레드
      ㄴ> 여러 작업을 동시에 처리하는 것처럼 보이지만
          실제로는 이벤트 루프를 통해 단일 스레드에서 작동
  3) npm
      ㄴ> Node Package Manager를 통해 수많은 라이브러리와
          도구에 접근 가능
  ```

  - express

  ```
  Node.js의 웹 애플리케이션 프레임워크
  웹 및 모바일 애플리케이션의 개발을 위한 기능 집합을 제공


  (특징)
  1) 미들웨어
      ㄴ> 요청과 응답 사이의 함수들을 정의하여
          웹 애플리케이션에서 발생하는 요청에 대해 응답할 방식을 결정
  2) 라우팅
      ㄴ> URL 기반의 라우트 정의가 가능
  3) 템플릿 엔진 지원
      ㄴ> Pug, EJS, Handlebars 등 다양한 템플릿 엔진을 지원
  ```

  - pug

  ```
  Node.js를 위한 템플릿 엔진 중 하나로,
  HTML을 간결한 방식으로 작성


  (특징)
  1) 들여쓰기 기반
      ㄴ> HTML 태그들의 계층 구조를 들여쓰기로 표현
  2) 코드 실행
      ㄴ> 템플릿 내에서 JavaScript 코드 실행이 가능
  3) 미리 컴파일
      ㄴ> 빠른 렌더링을 위해 템플릿을 미리 컴파일
  ```

  - WebSocket

  ```
  단일 TCP 연결을 통해 전체 양방향 통신 채널을 제공하는 프로토콜

  전통적인 HTTP 요청/응답 모델과 달리
  WebSocket은 서버와 클라이언트 간에 지속적인 연결을 유지,
  한 쪽에서 데이터를 전송할 때마다 새 연결을 설정할 불필요


  (특징)
  1) 실시간 통신
      ㄴ> 빠르고 실시간으로 데이터를 교환
  2) 저 오버헤드
      ㄴ> 한 번 연결되면, 데이터 패킷의 오버헤드가 최소화
  3) 지속적인 연결
      ㄴ> HTTP와는 달리, 연결이 지속적으로 유지되므로 채팅,
          게임 및 실시간 애플리케이션에서 이상적
  ```

  ```javascript
  /*
  @ Express 함께 사용
  
  - express와 http 모듈을 사용하여 HTTP와 
    WebSocket 서버를 동일한 포트에서 실행
  
  - express 앱을 생성하고 해당 앱을 기반으로 
    http 서버를 만든 다음, 그 서버를 ws에 전달
  */
  const express = require("express");
  const http = require("http");
  const WebSocket = require("ws");

  const app = express();
  const server = http.createServer(app);
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    // ... 이전 코드와 동일 ...
  });

  server.listen(8080, () => {
    console.log("Server is listening on port 8080");
  });
  ```

> 주의

```
npm i "@socket.io/admin-ui"
```
