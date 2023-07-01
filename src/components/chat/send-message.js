const SendMessage = props => {
  const messageDate = new Date(props.time);
  const date = Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(messageDate);

  return (
    <li className="my-4 text-end">
      <span className="bg-royal-purp  text-dark-c rounded-xl inline-block py-2 px-4">
        {/* I&apos;m good */}
        {props.message}
        <span className="block text-xs mt-1">{date}</span>
      </span>
    </li>
  );
};

export default SendMessage;
