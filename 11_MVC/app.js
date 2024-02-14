const express = require("express");
const app = express();
const PORT = 3000;
const multer = require("multer");
const path = require("path");

// ### 미들웨어
// view 관련
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`${PORT} is open!!`);
  console.log(`http://localhost:${PORT}`);
});
