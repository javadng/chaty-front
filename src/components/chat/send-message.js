const SendMessage = props => {
  const messageDate = new Date(props.time);
  const date = Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(messageDate);

  return (
    <li className=" my-8 text-end relative">
      <span className="bg-royal-purp  text-dark-c rounded-xl inline-block  py-2 px-4">
        {/* I&apos;m good */}
        {props.message}
        <span className="absolute w-full left-1 -top-6 dark:text-white text-sm">
          {date}
        </span>
      </span>
    </li>
  );
};

export default SendMessage;
