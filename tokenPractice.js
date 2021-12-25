const bcryt = require("bcryptjs"); // 단방향 암호화
const jwt = require("jsonwebtoken");

// 회원가입 할 때 주로 쓰임
function hashing(password) {
  //hash는 비동기라서 await나 .then()을 같이 써줘야 되서 가독성이 떨어지지만, hashSync는 동기로 단순하게 사용할 수 있다.
  // 하지만 보안을 생각하면 비동기로 만드는 것이 더 좋다.
  // 로직을 짤 때는 먼저 리턴 값을 정해 준 다음 로직을 짜는 것이 좋다.
  const startTime = new Date();

  const hashed = bcryt.hashSync(password, 12); // 결과를 변수에 담아줌

  const endTime = new Date();

  console.log((endTime - startTime) / 100, "걸린 시간");

  return hashed;
}

function main() {
  const password = "1234비밀번호";
  const hashPW = hashing(password);
  console.log(bcryt.compareSync(password, hashPW)); // 암호화 된 비밀번호와 원래 비밀번호가 맞는지 확인, 로그인에 주로 쓰임
  console.log(hashPW);

  // jwt.sign() 토큰을 발행하는 용도
  // jwt.verify() 토큰을 검증하는 용도
  const accessToken = jwt.sign({ id: 50000000 }, "secretKey", {
    expiresIn: "1h",
  });
  const decodedToken = jwt.verify(accessToken, "secretKey");

  console.log(accessToken);
  console.log(decodedToken); //iat는 발행된 시간
}

main();
