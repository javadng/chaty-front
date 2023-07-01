import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import { useSockets } from '../../context/socketContext';
import EVENTS from '../../config/events';

const PvItem = props => {
  const router = useRouter();
  const { socket, setRoomId, setMessages } = useSockets();

  const showChatMessage = e => {
    if (e.target.nodeName === 'path') return;
    setRoomId(props.roomId);

    // join to room
    socket.emit(EVENTS.CLIENT.JOIN_PRIVATE_CHAT, props.roomId);

    setMessages([]);
    if (window.innerWidth > 800) {
      router.push(
        { pathname: '/chat', query: { roomName: props.roomName } },
        undefined,
        {
          shallow: true,
          as: '/chat',
        }
      );
    } else {
      router.push(`/chat/${props.roomName}`);
    }
  };

  const deleteHandler = () => console.log('delete btn');

  return (
    <li
      onClick={showChatMessage}
      className="chat-pv-message my-2 shadow-custom-1 dark:bg-dark-c rounded-lg p-1 text-slate-200 cursor-pointer transition duration-200 hover:-translate-x-4  grid gap-1.5 sm:gap-3 grid-rows-[50px] items-center grid-cols-chat-item relative"
    >
      <figure className="fig-pic transition duration-200">
        <Image
          src={props.imgSrc}
          width={100}
          height={100}
          className="rounded-full h-[50px] w-[50px]"
          alt="profile"
        />
      </figure>
      <div className="dark:text-slate-400 text-black">
        <h2 className="capitalize">{props.roomName}</h2>
        <span className="text-sm mt-2 truncate block w-3/4 sm:w-5/6">
          {props.lastText}
        </span>
      </div>
      <DeleteIcon
        onClick={deleteHandler}
        className="trash-icon absolute right-1 top-4 text-red-300 transition duration-200 hover:text-red-500 opacity-0 hidden"
      />
      <span className="absolute left-1 top-1 bg-blue-c p-2 rounded-full h-5 w-5 flex justify-center items-center">
        1
      </span>
    </li>
  );
};

export default PvItem;
