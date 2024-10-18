import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const sidebarLinks = {
  user: [
    { route: '/', label: 'Home' },
    { route: '/purchased', label: 'Purchased' },
  ],
  photographer: [
    { route: '/', label: 'Home' },
    { route: '/upload', label: 'Upload' },
    { route: '/payments', label: 'Payments' },
  ],
};
interface SidebarProps {
  role: 'user' | 'photographer';
}

const Sidebar = ({ role }: SidebarProps) => {
  let location = useLocation();
  let pathName = location.pathname;
  return (
    <div className="sticky left-0 top-0 flex h-screen flex-col justify-between w-fit bg-orange-400 p-6 pt-28 text-black max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks[role].map((link) => {
          const isActive =
            pathName === link.route || pathName.startsWith(`${link.route}/`);
          return (
            <Link
              to={link.route}
              key={link.label}
              className={`flex gap-4 items-center p-4 rounded-lg justify-start ${
                isActive && 'bg-blue-1'
              }`}
            >
              {/* <img src={link.imgUrl} alt={link.label} width={24} height={24} /> */}
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
