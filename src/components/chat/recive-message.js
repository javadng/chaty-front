const RecievedMessage = props => {
  const messageDate = new Date(props.time);
  const date = Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(messageDate);
  return (
    <li className="dark:text-white relative my-8">
      <span className="dark:bg-dark bg-dark-c text-white rounded-xl inline-block py-2 px-4">
        {props.message}
      </span>
      <span className="absolute  left-1 -top-6 text-sm">{date}</span>
    </li>
  );
};

export default RecievedMessage;
