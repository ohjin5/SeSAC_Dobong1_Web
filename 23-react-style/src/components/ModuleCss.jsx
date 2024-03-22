import classNames from "classnames";
import style1 from "../styles/style.module.css";

export default function ModuleCSS() {
  return (
    <div className={style1.container}>
      <h4>.module.css 적용</h4>
      <div className={style1.box2}>
        <div>안녕하세요</div>
      </div>

      <br />
      <div className={`${style1.first} ${style1.second}`}>
        클래스 여러개 지정1 (백틱사용)
      </div>
      {/* ["first", "second"] >> "first second"*/}
      <div className={[style1.first, style1.second].join(" ")}>
        클래스 여러개 지정2 (join 이용)
      </div>
      <div className={classNames(style1.first, style1.second)}>
        classnames 메소드 이용 (install 필요)
      </div>
    </div>
  );
}
