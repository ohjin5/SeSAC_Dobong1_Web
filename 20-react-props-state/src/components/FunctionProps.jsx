export function FunctionProps(props) {
  return (
    <div>
      <h5>{props.name}</h5>
      <p>
        {props.number}개에 {props.price}원
      </p>
      <hr />
    </div>
  );
}
