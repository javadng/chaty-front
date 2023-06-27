import Link from 'next/link';
import ChatIcon from '@mui/icons-material/Chat';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router';

import ThemeSelector from './theme-selector';

const setActiveClassName = (pathName, router) => {
  return router.pathname === pathName ? 'big-nav-after' : '';
};

const BigScreenNav = props => {
  const router = useRouter();

  return (
    <div className="sm:flex items-center justify-evenly h-16 hidden">
      <ThemeSelector />
      <ul className="navigation w-2/3 flex items-center justify-evenly text-gray-600 dark:text-gray-300">
        <li
          className={`hover:text-blue-500 transition-all duration-200  relative ${setActiveClassName(
            '/chat',
            router
          )}`}
        >
          <Link href="/chat">
            <ChatIcon className="mr-2" />
            <span>chats</span>
          </Link>
        </li>
        <li
          className={`hover:text-blue-500 transition-all duration-200  relative ${setActiveClassName(
            '/profile',
            router
          )}`}
        >
          <Link href="/profile">
            <AccountCircleIcon className="mr-2" />
            <span>profile</span>
          </Link>
        </li>
        <li
          className={`hover:text-blue-500 transition-all duration-200  relative ${setActiveClassName(
            '/menu',
            router
          )}`}
        >
          <Link href="/menu">
            <ContactsIcon className="mr-2" />
            <span>contact</span>
          </Link>
        </li>
      </ul>
      <div className="account">2</div>
    </div>
  );
};

export default BigScreenNav;
