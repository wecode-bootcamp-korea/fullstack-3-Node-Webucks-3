const createProduct = (req, res) => {
  const products = []; // 임의의 빈 배열에다가 상품 정보를 저장하겠습니다.
  console.log("Request body: ", req.body); // client로 부터 받은 정보를 확인합니다.
  const { koreanName, englishName, imageUrl, categoryId } = req.body; // client로 부터 전달받은 정보를 활용합니다
  const product = {
    koreanName,
    englishName,
    imageUrl,
    categoryId,
  }; // 전달 받은 키를 이용해 객체를 만듭니다.

  products.push(product); // 새로만든 객체를 상품 정보 배열에 추가해줍니다.
  res.status(201).send({ data: products }); // 새로 생성된 배열을 client에게로 반환해줍니다.
};

const sendPosts = (req, res) => {
  const products = []; // 임의의 빈 배열에다가 상품 정보를 저장하겠습니다.
  // console.log('Request body: ', req.body) // client로 부터 받은 정보를 확인합니다.
  const { koreanName, englishName, imageUrl, categoryId } = req.body; // client로 부터 전달받은 정보를 활용합니다
  const product = {
    id: 1, // 추가사항
    koreanName,
    englishName,
    imageUrl,
    categoryId,
  }; // 전달 받은 키를 이용해 객체를 만듭니다.

  products.push(product); // 새로만든 객체를 상품 정보 배열에 추가해줍니다.
  res.status(201).json({ data: products }); // 새로 생성된 배열을 client에게로 반환해줍니다.
};

const updatePost = (req, res) => {
  const products = [
    {
      id: 1,
      title: "node",
      description: "node.js is awesome",
    },
    {
      id: 2,
      title: "express",
      description: "express is a server-side framework for node.js",
    },
  ];
  const { id } = req.body;
  const posting = postings.filter((posting) => posting.id === id);
  posting.title = "new title";

  res.json({ data: products });
};
module.exports = { sendPosts, createProduct, updatePost };
// routing.js 에서 사용하기 위해 모듈로 내보낸다.
