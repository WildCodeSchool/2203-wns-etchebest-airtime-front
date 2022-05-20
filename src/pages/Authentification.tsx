import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { GlobalButton } from "../components/buttons/GlobalButton";
import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password){
      id
      firstname
      lastname
      email
      password
      role
      token
    }
  }
`;
const Authentification = () => {
  const [email, setEmail] = useState("jC@sensei.fr");
  const [password, setPassword] = useState("sensei");
  const [signIn, { data }] = useMutation(LOGIN);
  if (data) {
    console.log(data);
    localStorage.setItem("token", data?.signIn?.token);
  }
  return (
    <AuthentificationSection>
      <AuthentificationTitle>AirTime</AuthentificationTitle>
      <InscriptionConnexionDiv>
        <ButtonConnexion
          label={"Se Connecter"}
          onClick={async () => {
            try {
              await signIn({
                variables: { email: email, password: password },
              });
            } catch (err) {
              console.log("Handle me", err);
            }
          }}
        />
        <ButtonRegistration
          label={"S'inscrire"}
          backgroundColor={theme.colors.background.white}
          color={theme.colors.text.black}
          onClick={() => ""}
          disabled
        />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
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
