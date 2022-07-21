import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { GlobalButton } from '../components/buttons/GlobalButton';
import { InputBase } from '../components/input/Input';
import { LOGIN, SIGNUP } from '../graphql/mutations/userMutation';
import { theme } from '../styles/theme';
import { enumLogin } from '../textStorage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [errorMutation, setErrorMutation] = useState('');

  const [signIn, { data: dataSignIn, error: errorSignIn }] = useMutation(
    LOGIN,
    {
      onError: (): any => setErrorMutation(errorSignIn?.message || ''),
    }
  );
  const [signUp, { data: dataSignUp, error: errorSignUp }] = useMutation(
    SIGNUP,
    {
      onError: (): any => setErrorMutation(errorSignUp?.message || ''),
    }
  );

  const [connection, setConnection] = useState(false);
  const [subscription, setSubscription] = useState(false);

  if (dataSignIn) {
    localStorage.setItem('token', dataSignIn?.signIn?.token);
    localStorage.setItem('user', JSON.stringify(dataSignIn?.signIn));
  } else if (dataSignUp) {
    localStorage.setItem('token', dataSignUp?.signUp?.token);
    localStorage.setItem('user', JSON.stringify(dataSignUp?.signUp));
  }

  const onChangedEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangedPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const onChangedFirstname = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFirstname(e.target.value);
  const onChangedLastname = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLastname(e.target.value);

  const loginMutation = (mutation: any) => {
    try {
      return mutation.then((data: any) => (data && !errorMutation) && router.push('/'))
    } catch (_) {
      return alert(errorMutation || enumLogin.AnErrorHasEncountered);
    }
  };

  const handleRegister = () =>
    loginMutation(
      signUp({
        variables: {
          email: email,
          password: password,
          firstname: firstname,
          lastname: lastname,
        },
      })
    );

  const handleConnection = () =>
    loginMutation(
      signIn({
        variables: { email: email, password: password },
      })
    );

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
            label={enumLogin.connection}
          />
          <ButtonRegistration
            onClick={() => {
              setSubscription(!subscription);
              setConnection(false);
            }}
            label={enumLogin.register}
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
          <InputFieldForm
            value={email}
            onChange={onChangedEmail}
            placeholder={enumLogin.email}
          />
          <InputFieldForm
            value={password}
            onChange={onChangedPassword}
            type="password"
            placeholder={enumLogin.password}
          />
          <div>
            <ButtonConnexion
              label={enumLogin.signIn}
              onClick={handleConnection}
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
          <InputFieldForm
            value={firstname}
            onChange={onChangedFirstname}
            placeholder={enumLogin.firstname}
          />
          <InputFieldForm
            value={lastname}
            onChange={onChangedLastname}
            placeholder={enumLogin.lastname}
          />
          <InputFieldForm
            value={email}
            onChange={onChangedEmail}
            placeholder={enumLogin.email}
          />
          <InputFieldForm
            value={password}
            onChange={onChangedPassword}
            type="password"
            placeholder={enumLogin.password}
          />
          <div>
            <ButtonRegistration
              label={enumLogin.signUp}
              backgroundColor={theme.colors.background.white}
              color={theme.colors.text.black}
              onClick={handleRegister}
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

const InputFieldForm = styled(InputBase)`
  width: 300px;
`

export default Login;
