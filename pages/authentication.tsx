import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { GlobalButton } from "../components/buttons/GlobalButton";

const Authentication = () => {
  return (
    <WrapperAuthentication>
      <ProjectTitle>AirTime</ProjectTitle>
      <WrapperButton>
        <ButtonLogin label="Se Connecter" onClick={() => {}} />
        <ButtonRegistration
          label="S'inscrire"
          backgroundColor={theme.colors.background.white}
          color={theme.colors.text.black}
          onClick={() => {}}
        />
      </WrapperButton>
    </WrapperAuthentication>
  );
};

const WrapperAuthentication = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProjectTitle = styled.h1`
  position: absolute;
  top: 32px;
  font-size: 64px;
  color: ${theme.colors.text.black};
`;

const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonLogin = styled(GlobalButton)`
  margin-bottom: 35px;
`;

const ButtonRegistration = styled(GlobalButton)``;

export default Authentication;
