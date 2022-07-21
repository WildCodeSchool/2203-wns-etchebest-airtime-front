import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { GlobalButton } from '../components/buttons/GlobalButton';
import { InputBase } from '../components/input/Input';
import { LOGIN, SIGNUP } from '../graphql/mutations/userMutation';
import { theme } from '../styles/theme';

const Login = () => {
  //Form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  //Mutation
  const [signIn, { data }] = useMutation(LOGIN);
  const [signUp, { data: dataSignUp }] = useMutation(SIGNUP);
  const [connection, setConnection] = useState(false);
  const [subscription, setSubscription] = useState(false);

  if (data) {
    localStorage.setItem('token', data?.signIn?.token);
    localStorage.setItem('user', JSON.stringify(data?.signIn));
  } else if (dataSignUp) {
    localStorage.setItem('token', dataSignUp?.signUp?.token);
    localStorage.setItem('user', JSON.stringify(dataSignUp?.signUp));
  }

  const router = useRouter();

  return (
    <>
      <AuthentificationSection>
        <AuthentificationTitle>AirTime</AuthentificationTitle>
        <InscriptionConnexionDiv>
          <ButtonConnexion
            onClick={() => {
              setSubscription(false);
              setConnection(!connection);
            }}
            label="Connexion"
          />
          <ButtonRegistration
            onClick={() => {
              setSubscription(!subscription);
              setConnection(false);
            }}
            label="Inscription"
            backgroundColor={theme.colors.background.white}
            color={theme.colors.text.black}
          />
        </InscriptionConnexionDiv>
      </AuthentificationSection>

      {connection && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 32,
          }}
        >
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
          <div>
            <ButtonConnexion
              label={'Se Connecter'}
              onClick={async () => {
                try {
                  await signIn({
                    variables: { email: email, password: password },
                  });
                  if (data) {
                    router.push('/');
                  }
                } catch (err) {
                  alert('Mauvais identifiants');
                }
              }}
            />
          </div>
        </div>
      )}

      {subscription && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 32,
          }}
        >
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
          <div>
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
                    },
                  });
                  if (dataSignUp) {
                    router.push('/');
                  }
                } catch (err) {
                  alert('Mauvais identifiants');
                }
              }}
            />
          </div>
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
  margin: 64px;
  margin-bottom: 80px;
  color: #333;
`;

const InscriptionConnexionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const ButtonConnexion = styled(GlobalButton)`
  margin: 16px;
`;

const ButtonRegistration = styled(GlobalButton)`
  margin: 16px;
`;

export default Login;
