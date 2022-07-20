import { useMutation } from '@apollo/client';
import { useState } from 'react';
import styled from 'styled-components';
import { GlobalButton } from '../components/buttons/GlobalButton';
import { InputBase } from '../components/input/Input';
import { LOGIN, SIGNUP } from '../graphql/mutations/userMutation';
import { theme } from '../styles/theme';

const Authentification = () => {
  //Form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [role, setRole] = useState('developer');

  //Mutation
  const [signIn, { data }] = useMutation(LOGIN);
  const [signUp, { data: dataSignUp }] = useMutation(SIGNUP);
  const [connection, setConnection] = useState(false);
  const [subscription, setSubscription] = useState(false);

  if (data) {
    localStorage.setItem('token', data?.signIn?.token);
  } else if (dataSignUp) {
    localStorage.setItem('token', dataSignUp?.signUp?.token);
  }

  return (
    <>
      <AuthentificationSection>
        <AuthentificationTitle>AirTime</AuthentificationTitle>
        <InscriptionConnexionDiv>
          <ButtonConnexion
            label={'Se Connecter'}
            onClick={async () => {
              try {
                await signIn({
                  variables: { email: email, password: password },
                });
              } catch (err) {
                alert('Mauvais identifiants');
              }
            }}
          />
          <ButtonRegistration
            label={"S'inscrire"}
            backgroundColor={theme.colors.background.white}
            color={theme.colors.text.black}
            onClick={async () => {
              try {
                await signUp({
                  variables: {
                    email: email,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                    role: role,
                  },
                });
              } catch (err) {
                alert('Mauvais identifiants');
              }
            }}
          />
        </InscriptionConnexionDiv>
      </AuthentificationSection>
      <button
        onClick={() => {
          setSubscription(false);
          setConnection(!connection);
        }}
      >
        Connexion
      </button>
      <button
        onClick={() => {
          setSubscription(!subscription);
          setConnection(false);
        }}
      >
        Inscription
      </button>

      {connection && (
        <div>
          <InputBase
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <InputBase
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Mot de passe"
          />
        </div>
      )}

      {subscription && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <InputBase
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            placeholder="Prénom"
          />
          <InputBase
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            placeholder="Nom"
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="developer">developer</option>
            <option value="authentified visitor">authentified visitor</option>
            <option value="project manager">project manager</option>
            <option value="admin">admin</option>
          </select>
          <InputBase
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <InputBase
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Mot de passe"
          />
        </div>
      )}
    </>
  );
};

const AuthentificationSection = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
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
