import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCircleInfo } from 'react-icons/fa6';
import { IoMdLogOut } from 'react-icons/io';
import { IoHomeSharp } from 'react-icons/io5';
import { MdContactPage } from 'react-icons/md';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import ButtonIcon from '../buttons/button-icon';

const Navbar = (props: INavbar) => {
  const { onPress, handlePress, showMobileNavbar } = props;
  const pathname = usePathname();

  const OPTIONS_NAVBAR = [
    {
      title: 'Branda',
      path: '/branda',
      icon: <IoHomeSharp size={17} />,
    },
    {
      title: 'About Us',
      path: '/#',
      icon: <FaCircleInfo size={17} />,
    },
    {
      title: 'Contact Us',
      path: '/#',
      icon: <MdContactPage size={17} />,
    },
  ];

  return (
    <nav className="p-5 shadow-md sticky top-0">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-purple-500 text-3xl font-semibold hidden md:inline">
            sunriseblog..
          </h1>
          <div className="inline md:hidden">
            <ButtonIcon
              icon={
                showMobileNavbar ? (
                  <RxCross2 size={20} />
                ) : (
                  <RxHamburgerMenu size={20} />
                )
              }
              onPress={handlePress}
            />
          </div>
        </div>
        <div>
          <ul className="md:flex justify-between items-center gap-x-5 text-md font-semibold hidden">
            {OPTIONS_NAVBAR.map((nav, index) => (
              <Link href={nav?.path}>
                <li
                  className={`flex items-center gap-x-1 ${
                    nav.path === pathname ? 'text-purple-500' : ''
                  }`}
                  key={index}
                >
                  {nav?.icon}
                  {nav?.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <button
            className="border border-b-amber-800 p-2 rounded-md cursor-pointer hover:bg-purple-500 hover:text-white"
            onClick={onPress}
          >
            <IoMdLogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
