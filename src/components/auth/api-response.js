const ApiResponse = props => {
  const successClass = 'text-white';
  const errorClass = 'text-red-600';

  const elemClass = `mt-4 p-2 bg-blue-200 bg-opacity-40 shadow-xl w-2/3 mx-auto rounded-xl ${
    props.status === 'success' ? successClass : errorClass
  }`;
  return (
    props.status && (
      <p className={elemClass}>
        {props.status === 'loading' && 'loading'}
        {props.status !== 'loading' && props.message}
      </p>
    )
  );
};

export default ApiResponse;
