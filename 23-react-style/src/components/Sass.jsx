import "../styles/SassComponent.scss";

export default function Sass() {
  return (
    <>
      <h4>sass 사용</h4>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        {/* button.btn{BUTTON$}*3 */}
        <button className="btn orangered">BTN1</button>
        <button className="btn btn--opacity">BTN2</button>
        <button className="btn btn--blue">BTN3</button>
      </div>

      {/* mixin, for, if, each */}
      {/* .container>.box1*3+p.circle*3+.box2{hi$}*4 */}
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>
        <div className="box2">hi1</div>
        <div className="box2">hi2</div>
        <div className="box2">hi3</div>
        <div className="box2">hi4</div>
      </div>

      <div className="background-image"></div>
    </>
  );
}
