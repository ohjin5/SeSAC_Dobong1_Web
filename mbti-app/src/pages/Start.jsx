import styled from "styled-components";
const MainImg = styled.img`
  width: inherit;
`;
const Header = styled.header`
  font-size: 3rem;
`;
const SubHeader = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
export default function Start() {
  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg
        src={process.env.PUBLIC_URL + "/assets/main.jpg"}
        alt="메인 이미지"
      />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI 를 알아 봅시다!{" "}
      </SubHeader>
      <button text="테스트 시작"> 테스트 시작 </button>
    </>
  );
}
