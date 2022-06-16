import type { NextPage } from "next";
import { toast } from "react-toastify";
import styled from "styled-components";

const Home: NextPage = () => {
  const notify = () => toast("Wow so easy!");
  
  return (
    <WrapperIndex>
      <TextHello color="blue">Hello World !</TextHello>
      <ButtonNotify onClick={notify}>Notify!</ButtonNotify>
    </WrapperIndex>
  );
};

const WrapperIndex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextHello = styled.p`
  margin: 0;
  color: ${({ color }) => color || "red"};
`;

const ButtonNotify = styled.button``;

export default Home;
