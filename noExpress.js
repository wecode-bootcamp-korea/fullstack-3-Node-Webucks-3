const http = require("http");
const { sendPosts } = require("./sendPosts");

const server = http.createServer((req, res) => {
  console.log("req", req);
  const { url, method } = req;
  res.setHeader("Content-Type", "application/json");

  if (url === "/") return res.end(JSON.stringify({ message: "/endpoint" }));
  if (url === "/signup" && method === "POST")
    return res.end(JSON.stringify({ message: "회원가입 완료!" }));
  if (url === "/login" && method === "POST")
    return res.end(JSON.stringify({ message: "로그인 완료!" }));
  if (url === "/products" && method === "GET") return sendPosts(res);

  res.end(
    JSON.stringify({ message: "this response answers to every requests" })
  );
});

server.listen(3000, () => {
  console.log("server is listening on PORT 3000");
});

// express 없이 서버를 만들면 경로마다 method와 호출할 함수를 지정해줘야 한다.
