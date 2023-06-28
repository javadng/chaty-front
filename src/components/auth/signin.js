import Input from './input';
import SubmitBtn from './submit-btn';
import { useState } from 'react';
import EVENTS from '../../config/events';
import { useSockets } from '../../context/socketContext';
import ApiResponse from './api-response';
import { useRouter } from 'next/router';

const SignIn = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apiResponse, setApiResponse] = useState({
    status: null,
    message: null,
  });
  const router = useRouter();
  const { socket } = useSockets();

  const usernameChangeHander = e => setUsername(e.target.value);
  const passwordChangeHander = e => setPassword(e.target.value);

  const submitHandler = async e => {
    e.preventDefault();

    socket.emit(EVENTS.CLIENT.AUTH.LOGIN, { username, password });

    socket.on(EVENTS.SERVER.AUTH.SUCCESS, data => {
      fetch('/api/set-cookie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.token),
      })
        .then(res => res.json())
        .then(data => {
          setApiResponse({ status: 'success', message: 'successfully login.' });
          router.replace('/chat');
        });
    });

    socket.on(EVENTS.SERVER.AUTH.ERROR, res =>
      setApiResponse({ status: 'error', message: res.message })
    );
  };

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
