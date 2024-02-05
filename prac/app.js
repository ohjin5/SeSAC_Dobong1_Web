// const express = require("express");
// const app = express();
// const PORT = 8080;
// const multer = require("multer");
// const path = require("path");

// app.set("view engine", "ejs");
// app.set("views", "./views");

// app.use("/uploads", express.static(__dirname + "/uploads"));
// app.use("/static", express.static(__dirname + "/public"));
// // Express 애플리케이션 설정에서 아래 코드를 추가합니다.
// // app.use(express.static(path.join(__dirname, "public")));

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// const upload = multer({
//   dest: "uploads/",
// });

// const uploadDetail = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads/");
//     },
//     filename: function (req, file, done) {
//       const userId = req.body.id || "unknown_user";
//       const extension = path.extname(file.originalname);
//       const fileName = `${userId}${extension}`;

//       done(null, fileName);
//     },
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// app.get("/", function (req, res) {
//   res.render("index");
// });

// app.post("/upload", uploadDetail.single("img"), function (req, res) {
//   console.log(req.file);
//   console.log(req.body);
//   const userInfo = req.body;
//   res.render("result", {
//     id: userInfo.id,
//     pw: userInfo.pw,
//     name: userInfo.name,
//     age: userInfo.age,
//     img: req.file.path,
//   });
// });

// app.listen(PORT, function () {
//   console.log(`http://localhost:${PORT}`);
// });

// 위에는내가 한거 아래부터는 리더님이 하신거
const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/register", upload.single("profile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  //   {
  //     fieldname: 'profile',
  //     originalname: 'img2.png',
  //     encoding: '7bit',
  //     mimetype: 'image/png',
  //     destination: 'uploads/',
  //     filename: 'img21706837210550.png',
  //     path: 'uploads\\img21706837210550.png',
  //     size: 98584
  //   }
  res.send("응답 완료");
  res.render("result", {
    src: req.file.path,
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
