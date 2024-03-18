export default function UseJSX() {
  //   const divStyle = {
  //     width: "100px",
  //     height: "100px",
  //     backgroundColor: "gray",
  //     textAlign: "center",
  //     color: "white",
  //     marginTop: ".5rem",
  //     display: "inline-block",
  //     border: "1px solid red",
  //   };
  //   return (
  //     <div>
  //       <div style={{ color: "#fff", width: "100px", backgroundColor: "tomato" }}>
  //         1
  //       </div>
  //       <div style={divStyle}>2</div>
  //       <div>3</div>
  //       <div>4</div>
  //     </div>
  //   );

  // 2. js 문법 사용하기
  let isShow = false;
  return (
    <div>
      <div
        style={{ backgroundColor: "orange" }}
        onClick={() => {
          alert("눌림!");
        }}
      >
        {isShow ? "true 일때 보임" : "!!!"}
      </div>
    </div>
  );
}
