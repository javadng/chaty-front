import BigScreenNav from './big-screen-nav';
import MobileNav from './mobile-nav';

const NavBar = props => {
  return (
    <div className="dark:bg-dark-c bg-blue-200 light:text-black bg-opacity-95 rounded-t-3xl fixed sm:sticky bottom-0 sm:top-0 sm:h-16 z-50 sm:rounded-none w-full">
      <MobileNav />
      <BigScreenNav />
    </div>
  );
};

export default NavBar;
