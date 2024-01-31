const express = require("express");
const app = express();
const PORT = 8080;
const multer = require("multer");
const path = require("path");
const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

//----------미들웨어----------------
//view 관련
app.set("view engine", "ejs");
app.set("views", "./views");
// static 폴더 설정
app.use("/uploads", express.static(__dirname + "/uploads"));
// console.log("현재 위치한 폴더의 경로", __dirname);

//body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!!`);
  console.log(`http://localhost:${PORT}`);
});

app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  //   {
  //     fieldname: 'userfile', //폼에 정의한 name 값
  //     originalname: 'ì¦\x9Dëª\x85ì\x82¬ì§\x84.jpg', //원본 파일명
  //     encoding: '7bit', //file encoding type
  //     mimetype: 'image/jpeg', //파일타입
  //     destination: 'uploads/', //파일 저장 경로
  //     filename: '2d7cc116ea9a1c4aeeba7ebc3025629d', //저장된 파일이름
  //     path: 'uploads\\2d7cc116ea9a1c4aeeba7ebc3025629d', //경로 포함된 파일 이름
  //     size: 1035717 //byte 기준 파일 크기
  //   }
  res.send("Upload!!");
});
