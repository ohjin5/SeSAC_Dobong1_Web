import { useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", {
  autoConnet: false,
});
export default function Start() {
  const initSocketConnect = () => {
    console.log(socket.connected);
  };

  useEffect(() => {
    initSocketConnect();
  }, []);
  return <p>소켓 연결 테스트 입니닷</p>;
}
