const express = require("express");
const PORT = 8080;
const app = express();
const session = require("express-session");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 세션 미들웨어 설정
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 10, // 10분 뒤 세션 종료
      httpOnly: true,
    },
  })
);
const userinfo = { userId: "cocoa", userPw: "1234" };

// 2. index에 세션 정보 전달
app.get("/", (req, res) => {
  /* index.ejs에 전달
    로그인 된 유저라면 {isLogin:true, user:user}
    로그인 안된 유저라면 {isLogin:false}
    */
  // TODO:user session불러오는 부분
  // user가 로그인됐는지 안됐는지 검사하는 부분

  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// TODO: 로그인 기능
// 1. 세션 설정
app.post("/login", (req, res) => {
  // user 라는 세션 설정
  console.log(req.body); //{id:'', pw:''}
  if (req.body.id === userinfo.userId && req.body.pw === userinfo.userPw) {
    // 로그인 진행
    req.session.user = "dsfssf";
    res.redirect("/");
  } else {
    res.send(`
        <script>
            alert('아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요.');
            document.location.href='/login';
        </script>
    `);
  }
});

// TODO: 로그아웃 기능
// 3. 세션 삭제
app.get("/logout", (req, res) => {
  // 1.로그아웃 진행
  // 2.메인 페이지 렌더 (redirect)
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/* req 객체
 req.session.키 = 값 // 세션 설정 <- 로그인할 때
 req.session.키 // 세션 사용 << 로그인된 사람인지 확인할 때
 req.session.destroy(콜백) // 세션삭제 << 로그아웃할 때
*/
