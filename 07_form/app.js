const express = require("express");
const app = express();
const PORT = 8080;
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //json 형식으로 데이터를 주고 받음

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/getForm", function (req, res) {
  console.log(req.query);
  //res.send("데이터 잘받았습니다.");
  res.render("result", {
    title: "GET",
    userInfo: req.query, //{id: '',email:'',pw:''}
  });
  // res.render('뷰')
});

app.post("/postForm", function (req, res) {
  // post 요청은 request.body에 담겨져 옵니다!
  console.log(req.body);
  res.send("포스트 요청 성공!~~");
});
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
