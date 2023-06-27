import PvItem from './pv-item';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useSockets } from '../../context/socketContext';
import { useState } from 'react';
import EVENTS from '../../config/events';
import { useRouter } from 'next/router';

const ContactMessages = props => {
  const { rooms, socket, setRoomId, setMessages, setRooms } = useSockets();
  const [newRoomName, setNewRoomName] = useState('');
  const router = useRouter();

  const newRoomValueHndl = e => setNewRoomName(e.target.value);

  const createNewRoom = () => {
    socket.emit(EVENTS.CLIENT.CEREATE_PRIVATE_CHAT, newRoomName);

    socket.on(EVENTS.SERVER.JOINED_ROOM, ({ roomId }) => {
      setRoomId(roomId);
      setMessages([]);
    });

    if (window.innerWidth > 800) {
      router.push(
        { pathname: '/chat', query: { roomName: newRoomName } },
        undefined,
        {
          shallow: true,
          as: '/chat',
        }
      );
    } else {
      router.push(`/chat/${newRoomName}`);
    }

    setNewRoomName('');
  };

  let roomsElems = [];

  for (const key in rooms) {
    roomsElems.push(
      <PvItem
        key={key}
        imgSrc="/imgs/profile-photos-2.jpg"
        lastText="OK, I do it and send for you."
        roomName={rooms[key].roomName}
        roomId={key}
      />
    );
  }

  return (
    <ul className="container px-4 md:px-0 col-start-2">
      <div className="text-white p-2 bg-blue-200 dark:bg-slate-500 rounded-xl mb-2">
        <ArrowBackIosIcon className="cursor-pointer" />
      </div>
      <div className="search relative">
        <label
          htmlFor="search"
          className="absolute top-2 right-2 dark:text-white"
        >
          <SearchIcon />
        </label>
        <input
          type="text"
          id="search"
          className="rounded-xl block w-full dark:bg-dark-c placeholder:pl-2 text-white mb-3"
          placeholder="Search"
        />
      </div>
      <div className="createRoom relative">
        <h2 className="text-center dark:text-white my-2">
          " let's create a new chat! "
        </h2>
        <input
          type="text"
          className="dark:bg-gray-300 block w-full rounded-xl placeholder:text-gray-700"
          placeholder="room name?"
          value={newRoomName}
          onChange={newRoomValueHndl}
        />
        <button
          className="bg-blue-400 dark:bg-gray-200 dark:text-black text-white block w-full p-2 rounded-xl mt-4 hover:-translate-y-1 transition hover:shadow-lg"
          onClick={createNewRoom}
        >
          Create a new Room
        </button>
      </div>
      <h2 className="text-center dark:text-white my-4">
        " All Active chats : "
      </h2>
      {roomsElems}
    </ul>
  );
};

export default ContactMessages;
