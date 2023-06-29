import { useState } from 'react';
import Input from './input';
import SubmitBtn from './submit-btn';
import { useSockets } from '../../context/socketContext';
import EVENTS from '../../config/events';
import ApiResponse from './api-response';
import { useRouter } from 'next/router';

const SignUp = props => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [apiResponse, setApiResponse] = useState({
    status: null,
    message: null,
    token: null,
  });
  const router = useRouter();

  const { socket } = useSockets();

  const nameChangeHander = e => setName(e.target.value);
  const usernameChangeHander = e => setUsername(e.target.value);
  const emailChangeHander = e => setEmail(e.target.value);
  const passwordChangeHander = e => setPassword(e.target.value);
  const passwordConfirmChangeHndl = e => setPasswordConfirm(e.target.value);

  const submitHandler = e => {
    e.preventDefault();
    const data = {
      username,
      name,
      email,
      password,
      passwordConfirm,
    };

    socket.emit(EVENTS.CLIENT.AUTH.SIGNUP, data);

    socket.on(EVENTS.SERVER.AUTH.SUCCESS, data =>
      setApiResponse({
        status: 'success',
        message: 'successfully login.',
        token: data.token,
      })
    );

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
        id="name"
        placeholder="Full Name"
        type="text"
        setInputChange={nameChangeHander}
        value={name}
      />
      <Input
        id="username"
        placeholder="username"
        type="text"
        setInputChange={usernameChangeHander}
        value={username}
      />
      {/* <Input id="phone" placeholder="Phone Number" type="text" /> */}
      <Input
        id="email"
        placeholder="Email"
        type="email"
        setInputChange={emailChangeHander}
        value={email}
      />
      <Input
        id="password"
        placeholder="Password"
        type="password"
        setInputChange={passwordChangeHander}
        value={password}
      />
      <Input
        id="passwordConfirm"
        placeholder="Password confirm"
        type="password"
        setInputChange={passwordConfirmChangeHndl}
        value={passwordConfirm}
      />
      <SubmitBtn text="Sign up" />
      <ApiResponse status={apiResponse.status} message={apiResponse.message} />
    </form>
  );
};

export default SignUp;
