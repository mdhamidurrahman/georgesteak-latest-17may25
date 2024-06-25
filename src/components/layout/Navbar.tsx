
import MobileNavbar from './MobileNavbar';
import MediumScreenNavbar from './MediumScreenNavbar';
import LargeScreenNavbar from './LargeScreenNavbar';
import XLScreenNavbar from './XLScreenNavbar';

const NavBar = () => {
  return (
    <>
      <div className="block sm:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden sm:block md:hidden">
        <MediumScreenNavbar />
      </div>
      <div className="hidden md:block lg:hidden">
        <LargeScreenNavbar />
      </div>
      <div className="hidden lg:block xl:hidden">
        <XLScreenNavbar />
      </div>
      <div className="hidden xl:block">
        <XLScreenNavbar />
      </div>
    </>
  );
};

export default NavBar;
