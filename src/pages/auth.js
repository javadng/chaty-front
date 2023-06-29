import { useState } from 'react';
import SignIn from '../components/auth/signin';
import SignUp from '../components/auth/signup';

const AuthPage = props => {
  const [isLoggin, setIsLoggin] = useState(true);

  const toggleLoginState = e => {
    if (
      (!isLoggin && e.target.innerText === 'Login') ||
      (isLoggin && e.target.innerText === 'SignUp')
    )
      setIsLoggin(prevState => !prevState);
  };

  const btnclass = 'py-3 rounded-3xl transition duration-500';

  return (
    <div className="px-3">
      <div className="auth container mx-auto max-w-md bg-blue-c h-full my-10 mb-32 py-5 rounded-xl">
        <h1 className="text-white text-4xl mb-8 text-center">Chaty app</h1>
        <div className="bg-gray-transparent text-gray-light p-1.5 w-4/5 grid grid-cols-2 mx-auto rounded-3xl">
          <button
            onClick={toggleLoginState}
            className={`${btnclass} ${isLoggin ? 'bg-white text-blue-c ' : ''}`}
          >
            Login
          </button>
          <button
            onClick={toggleLoginState}
            className={`${btnclass} ${
              !isLoggin ? 'bg-white text-blue-c ' : ''
            }`}
          >
            SignUp
          </button>
        </div>
        {isLoggin && <SignIn />}
        {!isLoggin && <SignUp />}
      </div>
    </div>
  );
};

export default AuthPage;
