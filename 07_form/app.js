const express = require("express");
const app = express();
const PORT = 8080;
app.set("view engine", "ejs");
app.set("views", "./views");
app.get("/", function (req, res) {
  res.render("index");
});
app.get("/getForm", function (req, res) {
  console.log(req.query);
  res.send("데이터 잘받았습니다.");
});
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
