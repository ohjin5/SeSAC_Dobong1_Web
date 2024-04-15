import styled from "styled-components";

interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}

const CardDiv = styled.div`
  width: 100px;
  background-color: whitesmoke;
  height: 300px;
  margin: 1rem;
  box-shadow: 0px 0px 10px #aaaa;
  text-align: center;
  border-radius: 10px;
  padding: 0 0.5rem;
`;

interface divProps {
  src: string;
}
const ImgDiv = styled.div<divProps>`
  width: 80%;
  height: 150px;
  border: 1px solid black;
  margin: 0 auto;
  background-image: url(${(props: divProps) => props.src});
  background-size: cover;
  background-position: center;
`;
const DescP = styled.p`
  margin-top: 0.5rem;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
export default function Card({ imgSrc, title, desc }: Props) {
  return (
    <CardDiv>
      <ImgDiv src={imgSrc}>imgSrc</ImgDiv>
      <h3>title</h3>
      <DescP>desc</DescP>
    </CardDiv>
  );
}
