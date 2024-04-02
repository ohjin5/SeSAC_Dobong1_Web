import styled from "styled-components";
import SkyblueButton from "../components/SkyblueButton";
import { useSelector, useDispatch } from "react-redux";
import { check, next } from "../store/modules/mbti";

const SurveyQuestion = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const Vs = styled.p`
  font-size: 2rem;
  padding-top: 1rem;
`;
export default function Mbti() {
  const dispatch = useDispatch();
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyblueButton
                text={el.text}
                clickEvent={() => {
                  dispatch(next());
                  dispatch(check(el.result));
                }}
              />
              {index === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
    </>
  );
}
