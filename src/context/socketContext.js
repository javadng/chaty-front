import { io } from 'socket.io-client';
import { SOCKET_URL } from '../config/config';
import { createContext, useContext, useState } from 'react';
import EVENTS from '../config/events';

const socket = io(SOCKET_URL, { withCredentials: true });
export const SocketContext = createContext({
  socket,
  rooms: {},
  roomId: '',
  username: '',
});

function SocketProvider(props) {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);

  socket.on(EVENTS.SERVER.ROOMS, rooms => setRooms(rooms));

  return (
    <SocketContext.Provider
      value={{
        socket,
        username,
        roomId,
        messages,
        rooms,
        setMessages,
        setRoomId,
        setUsername,
        setRooms,
      }}
    >
      {props.children}
    </SocketContext.Provider>
  );
}

export const useSockets = () => useContext(SocketContext);

export default SocketProvider;
