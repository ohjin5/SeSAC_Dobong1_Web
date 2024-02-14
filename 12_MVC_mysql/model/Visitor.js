const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

//  전체 데이터 조회
// /GET /visitor로 들어왔을때
exports.getVisitors = (cb) => {
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) throw err;

    console.log("Visitor.js 전체목록::", rows);

    cb(rows);
  });
};

// DB 연결전
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "allie", comment: "안녕하세요" },
//     { id: 2, name: "홍길동", comment: "hello" },
//   ];
// };
