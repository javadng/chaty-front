import RecievedMessage from './recive-message';
import SendMessage from './send-message';
import { useSockets } from '../../context/socketContext';
import InputChat from './input-chat';

const ChatList = props => {
  const classNames = props.className || '';

  let messageListElem;
  const { rooms, messages, username, roomId } = useSockets();

  let roomNameActive = '';

  if (rooms[roomId]?.roomName) {
    roomNameActive = `Your are in room called : ${rooms[roomId]?.roomName}`;
  } else {
    roomNameActive = 'Your not in any room please join and chat';
  }

  messageListElem =
    messages.length > 0 &&
    messages.map((el, index) => {
      if (el.type === 'text') {
        if (el.sender === username)
          return (
            <SendMessage key={index} message={el.message} time={el.time} />
          );
        return (
          <RecievedMessage key={index} message={el.message} time={el.time} />
        );
      }
      if (el.type === 'vioce') {
        return;
      }
    });

  return (
    <ul
      className={`container mx-auto dark:bg-slate-700 bg-gray-100 relative px-6 py-8 rounded-xl overflow-y-scroll h-[95vh] ${classNames}`}
    >
      <h2 className="bg-blue-200 p-3 rounded-xl text-center dark:bg-slate-600 bg-opacity-60 dark:text-white">
        {roomNameActive}
      </h2>
      {messageListElem}
      {/* <RecievedMessage />
      <SendMessage />
      <AudioPlayer src="/voice/Recording-1.m4a" sended={true} />
      <AudioPlayer src="/voice/Recording-1.m4a" /> */}
      <div className="">
        <InputChat />
      </div>
    </ul>
  );
};

export default ChatList;
