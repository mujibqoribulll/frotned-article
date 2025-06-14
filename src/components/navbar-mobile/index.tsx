'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = [
  {
    name: 'Branda',
    path: '/branda',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'work',
    path: '/work',
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col justify-center items-center gap-5 bg-black/10 h-screen -z-10">
      {Links.map((link, index) => (
        <Link
          href={link?.path}
          key={index}
          className={`text-xl capitalize hover:text-accent transition-all ${
            pathname === link?.path && 'border-b-accent border-b-2'
          }`}
        >
          <h1>{link?.name}</h1>
        </Link>
      ))}
    </nav>
  );
};

export default MobileNav;
