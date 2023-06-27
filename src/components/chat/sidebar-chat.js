import MenuIcon from '@mui/icons-material/Menu';
import SideBarChatItem from './sidechat-items';
import ChatIcon from '@mui/icons-material/Chat';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ArchiveIcon from '@mui/icons-material/Archive';
import BlockIcon from '@mui/icons-material/Block';
import { useState } from 'react';

const SideBarChat = props => {
  const [currentChat, setCurrentChat] = useState('All');
  const [isShownText, setIsShownText] = useState(false);

  const setIsActive = e => {
    const currChatName = e.target.closest('.sidbar-item');

    if (currChatName) {
      setCurrentChat(currChatName.dataset.name);
    }
  };

  const isTextShownHander = () => setIsShownText(prevState => !prevState);

  return (
    <>
      <MenuIcon
        onClick={isTextShownHander}
        className="block sm:hidden absolute text-white left-4 top-6 z-50 cursor-pointer transition"
      />
      <ul className="p-2 dark:bg-black bg-blue-300 bg-opacity-80 rounded-xl pt-10 absolute z-40 h-[100vh] sm:relative sm:h-auto">
        <SideBarChatItem
          onClick={setIsActive}
          shown={isShownText}
          name="All"
          isActive={currentChat === 'All'}
        >
          <span data-name="All" className="block icon-holder">
            <ChatIcon />
          </span>
        </SideBarChatItem>
        <SideBarChatItem
          isActive={currentChat === 'Pinned'}
          onClick={setIsActive}
          shown={isShownText}
          name="Pinned"
        >
          <span data-name="Pinned" className="block icon-holder">
            <AddToPhotosIcon />
          </span>
        </SideBarChatItem>
        <SideBarChatItem
          isActive={currentChat === 'Archive'}
          onClick={setIsActive}
          shown={isShownText}
          name="Archive"
        >
          <span data-name="Archive" className="block icon-holder">
            <ArchiveIcon />
          </span>
        </SideBarChatItem>
        <SideBarChatItem
          isActive={currentChat === 'Blocked'}
          onClick={setIsActive}
          shown={isShownText}
          name="Blocked"
        >
          <span data-name="Blocked" className="block icon-holder">
            <BlockIcon />
          </span>
        </SideBarChatItem>
      </ul>
    </>
  );
};

export default SideBarChat;
