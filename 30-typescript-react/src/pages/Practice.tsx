import HeaderMenu from "../components/Header";
import { Link } from "react-router-dom";
import PostList from "../components/practice/PostList";

export default function Practice() {
  return (
    <>
      <HeaderMenu />
      <br />
      <Link to="/practice/matzip">맛집페이지</Link>
      <h4>연습 문제</h4>
      <PostList />
    </>
  );
}
