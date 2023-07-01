const RecievedMessage = props => {
  const messageDate = new Date(props.time);
  const date = Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(messageDate);
  return (
    <li className="dark:text-white my-4">
      <span className="dark:bg-dark bg-dark-c text-white rounded-xl inline-block py-2 px-4">
        {props.message}
        <span className="block text-xs mt-1">{date}</span>
      </span>
    </li>
  );
};

export default RecievedMessage;
