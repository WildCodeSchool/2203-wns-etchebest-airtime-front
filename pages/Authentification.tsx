import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { GlobalButton } from "../components/buttons/GlobalButton";

const Authentification = () => {
  return (
    <AuthentificationSection>
      <AuthentificationTitle>AirTime</AuthentificationTitle>
      <InscriptionConnexionDiv>
        <ButtonConnexion label={"Se Connecter"} />
        <ButtonRegistration
          label={"S'inscrire"}
          backgroundColor={theme.colors.background.white}
          color={theme.colors.text.black}
          disabled
        />
      </InscriptionConnexionDiv>
    </AuthentificationSection>
  );
};

const AuthentificationSection = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const AuthentificationTitle = styled.h1`
  font-size: 8rem;
  margin: 40px;
  color: #333;
`;

const InscriptionConnexionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const ButtonConnexion = styled(GlobalButton)`
  margin-bottom: 20px;
`;

const ButtonRegistration = styled(GlobalButton)``;
export default Authentification;
