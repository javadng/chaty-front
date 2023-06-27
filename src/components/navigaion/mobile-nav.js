import Link from 'next/link';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRouter } from 'next/router';
import SettingsIcon from '@mui/icons-material/Settings';

const MobileNav = props => {
  const router = useRouter();

  const activeClassLink =
    'relative text-blue-500 after:w-1/3 after:ml-1 after:h-1 after:bg-blue-500 after:absolute after:-top-5 after:rounded-full after:left-0';

  return (
    <div className="h-16 relative text-gray-700 dark:text-white grid grid-cols-nav-bar justify-center items-center  sm:hidden">
      <button className="absolute shadow-custom-1 w-16 h-16 top-4 col-start-3 -translate-y-1/2 rounded-full dark:bg-blue-600 bg-blue-400">
        <Link
          href="/chat"
          className="flex justify-center items-center h-16 w-16"
        >
          <MarkUnreadChatAltIcon />
        </Link>
      </button>
      <Link
        href="/chat"
        className={`col-start-1 transition duration-300 after:duration-300 after:transition ${
          router.pathname.includes('/chat') ? activeClassLink : ''
        }`}
      >
        <MarkUnreadChatAltIcon />
      </Link>
      <Link
        href="/contacts"
        className={`col-start-2 transition duration-300 after:duration-300 after:transition ${
          router.pathname === '/contacts' ? activeClassLink : ''
        }`}
      >
        <PermContactCalendarIcon />
      </Link>
      <Link
        href="https://github.com/javadng/chaty-app"
        className="col-start-4 transition duration-300 after:duration-300 after:transition"
      >
        <GitHubIcon />
      </Link>
      <Link
        href="/profile"
        className={`col-start-5 transition duration-300 after:duration-300 after:transition ${
          router.pathname === '/profile' ? activeClassLink : ''
        }`}
      >
        <AccountCircleIcon />
      </Link>
    </div>
  );
};
export default MobileNav;
