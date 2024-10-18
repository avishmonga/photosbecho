import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-orange-400 px-6 py-4 lg:px-10">
      <Link to={'/'} className="flex items-center gap-1">
        <img
          src={'/icons/logo.svg'}
          alt="Yoom logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Photos becho
        </p>
      </Link>

      {/* <div className="flex-between gap-5">
        <UserButton />

        <MobileNav />
      </div> */}
    </nav>
  );
};

export default Navbar;
