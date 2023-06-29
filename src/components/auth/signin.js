import Input from './input';
import SubmitBtn from './submit-btn';
import { useState } from 'react';
import EVENTS from '../../config/events';
import { useSockets } from '../../context/socketContext';
import ApiResponse from './api-response';
import { useRouter } from 'next/router';
import { API_URL } from '../../config/config';

const SignIn = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apiResponse, setApiResponse] = useState({
    status: null,
    message: null,
    token: null,
  });
  const router = useRouter();
  const { socket } = useSockets();

  const usernameChangeHander = e => setUsername(e.target.value);
  const passwordChangeHander = e => setPassword(e.target.value);

  const submitHandler = async e => {
    e.preventDefault();

    socket.emit(EVENTS.CLIENT.AUTH.LOGIN, { username, password });

    socket.on(EVENTS.SERVER.AUTH.SUCCESS, data => {
      setApiResponse({
        status: 'success',
        message: 'successfully login.',
        token: data.token,
      });
    });

    socket.on(EVENTS.SERVER.AUTH.ERROR, res =>
      setApiResponse({ status: 'error', message: res.message })
    );
  };

  if (apiResponse.token) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: apiResponse.token }),
    };

    fetch('/api/set-cookie', requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        router.replace('/chat');
      });
  }

  return (
    <form onSubmit={submitHandler} className="my-6 text-center">
      <Input
        id="username"
        placeholder="Email"
        type="text"
        setInputChange={usernameChangeHander}
        value={username}
      />
      <Input
        id="password"
        placeholder="Password"
        type="password"
        setInputChange={passwordChangeHander}
        value={password}
      />
      <SubmitBtn text="Login" />

      <ApiResponse status={apiResponse.status} message={apiResponse.message} />
    </form>
  );
};

export default SignIn;
