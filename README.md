# ZOOM 코딩

> ZOOM Clone using NodeJS, WebRTC and WebSockets

- `설정`

```
npm init -y
npm i nodemon -D
npm i @babel/core @babel/cli @babel/node -D
npm i @babel/preset-env -D
npm i express
npm i pug
```

- `실행`

```
// terminal
npm run dev

// web
http://localhost:3000/
```

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
