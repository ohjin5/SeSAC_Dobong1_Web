export default function Practice() {
  /* 1번 */
  //   let name = "꼬미";
  //   let animal = "강아지";
  //   return (
  //     <div>
  //       <div>제 반려동물의 이름은 {name}입니다.</div>
  //       <div>
  //         {name}은 {animal}입니다.
  //       </div>
  //     </div>
  //   );
  //   /* 2번 */
  //   return 3 + 5 === 8 ? "정답입니다!" : "오답입니다!";
  //   /* 3번 */
  //   let a = 10;
  //   let b = 3;
  //   return a > b && "a가 b보다 큽니다.";
  //   /* 4번 */
  let title = "Hello World";
  return (
    <div>
      <div className="title">
        <h1>{title}</h1>
      </div>
      아이디 : <input type="text"></input>
      <br />
      비밀번호 : <input type="password"></input>
    </div>
  );
}
