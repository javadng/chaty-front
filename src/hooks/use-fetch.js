const { useState } = require('react');

const useFetch = () => {
  const [apiResponse, setApiResponse] = useState({
    status: null,
    message: null,
    data: null,
  });

  const sendRequest = async (URL, options = null) => {
    setApiResponse({
      status: 'loading',
      message: null,
      data: null,
    });

    try {
      const res = await fetch(URL, options);

      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

      const data = await res.json();

      setApiResponse({
        status: 'success',
        message: data.message,
        data,
      });
    } catch (error) {
      setApiResponse({
        status: 'error',
        message: error.message,
        data: null,
      });

      console.log('error: ', error);
    }

    console.log('apiResponse var: ', apiResponse);
  };

  return { apiResponse, sendRequest, setApiResponse };
};

export default useFetch;
