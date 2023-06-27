import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useState } from 'react';
import EVENTS from '../../config/events';
import { useSockets } from '../../context/socketContext';

const InputChat = props => {
  const [inputMessage, setInputMessage] = useState('');

  const { socket, roomId, setMessages, messages, username } = useSockets();

  const sendMessageHandler = () => {
    const date = new Date();
    const data = {
      reciverUser: '',
      message: inputMessage,
      type: 'text',
      roomId,
      time: date.toISOString(),
      sender: username,
    };

    socket.emit(EVENTS.CLIENT.SEND_PRIVATE_MESSAGE, data);

    setMessages([...messages, data]);
    setInputMessage('');
  };

  const textChangeHander = e => setInputMessage(e.target.value);

  return (
    <div className="dark:text-white fixed bottom-[84px] sm:bottom-16 w-inherit z-50">
      <textarea
        cols="30"
        rows="1"
        className="resize-none dark:bg-dark-c rounded-2xl block w-full pr-10"
        onChange={textChangeHander}
        value={inputMessage}
      />
      <SendRoundedIcon
        onClick={sendMessageHandler}
        className="absolute right-3 bottom-2 cursor-pointer text-blue-400"
      />
    </div>
  );
};

export default InputChat;
