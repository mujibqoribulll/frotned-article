'use client';

import Navbar from '@/components/navbar';
import MobileNav from '@/components/navbar-mobile';
import { useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { postLogoutThunk } from '../(auth)/login/store/authThunk';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useAppDispatch();

  const route = useRouter();
  const [showMobileNavbar, setSHowMobileNavbar] = useState(false);

  const handlePress = () => {
    setSHowMobileNavbar((prevState) => !prevState);
  };

  const handleLogout = async () => {
    let result = await dispatch(postLogoutThunk());

    if (postLogoutThunk.fulfilled.match(result)) {
      route.push('login');
    }
  };

  return (
    <div className="">
      <Navbar
        onPress={handleLogout}
        handlePress={handlePress}
        showMobileNavbar={showMobileNavbar}
      />
      {showMobileNavbar && <MobileNav />}
      <div className="mx-10">{children}</div>
    </div>
  );
}
