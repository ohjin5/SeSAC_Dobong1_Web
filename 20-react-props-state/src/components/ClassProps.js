import { Component } from "react";

class ClassProps extends Component {
  render() {
    console.log(this.props);
    const divStyle = {
      color: this.props.color,
    };
    return (
      <div style={divStyle}>
        <h4>hi, my name is {this.props.name}</h4>
        <ul>
          <li>별명:{this.props.nickname}</li>
          <li>좋아하는 색:{this.props.color}</li>
        </ul>
      </div>
    );
  }
}

// 구조분해 할당
class ClassProps2 extends Component {
  render() {
    const { name, color, nickname, bgColor } = this.props;
    const divStyle = {
      color: color,
      backgroundColor: bgColor,
    };
    return (
      <div style={divStyle}>
        <h4>hi, my name is {name}</h4>
        <ul>
          <li>별명:{nickname}</li>
          <li>좋아하는 색:{color}</li>
        </ul>
      </div>
    );
  }
}

class ClassProps3 extends Component {
  render() {
    console.log(this.props);
    const { food } = this.props;
    const divStyle = {
      color: "red",
    };
    return (
      <div style={divStyle}>
        <h4>내가 좋아하는 음식은 {food} 입니다.</h4>
      </div>
    );
  }
}

class ClassProps4 extends Component {
  render() {
    console.log(this.props);
    const { title, author, price, type } = this.props;
    const divStyle = {
      backgroundColor: "yellow",
      width: "450px",
    };
    const h1Style = {
      color: "orange",
    };
    return (
      <div style={divStyle}>
        <h1 style={h1Style}>이번주 베스트 셀러</h1>
        <img
          src="https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3245686%2F32456867703.20230404162016.jpg&type=w216"
          alt="이미지 설명"
        />
        <h2>{title}</h2>
        <h3>저자:{author}</h3>
        <h3>판매가:{price}</h3>
        <h3>구분:{type}</h3>
      </div>
    );
  }
}

ClassProps3.defaultProps = {
  food: "한식",
};

export { ClassProps, ClassProps2, ClassProps3, ClassProps4 };
