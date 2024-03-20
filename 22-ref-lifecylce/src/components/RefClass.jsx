import React from "react";

export class Refclass1 extends React.Component {
  render() {
    return (
      <>
        <p>버튼 클릭시 input 창에 focus 처리</p>
        <input type="text" />
        <button>focus</button>
      </>
    );
  }
}
