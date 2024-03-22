import { Component } from "react";

class MyComponent extends Component {
  componentDidMount() {
    console.log("class component, mount됨!!");
  }

  componentDidUpdate() {
    console.log("class component, update됨!!");
  }

  componentWillUnmount() {
    console.log("class component, unmount됨!!");
  }

  render() {
    return <p>My Component {this.props.number}</p>;
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };

  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    // 조건부 렌더링을 올바르게 적용
    return (
      <div>
        <button onClick={this.changeNumberState}>number + 1</button>
        <button onClick={this.changeVisibleState}>on/off</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </div>
    );
  }
}

export default LifeCycleClass;
