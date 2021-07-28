import { useState, useEffect } from 'react';

import HomeRouter from './HomeRouter';
import Button from 'components/common/button';
import Sidebar from 'components/common/sidebar';

import Icon from 'components/common/icon';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const sideBar = document.querySelector('.sidebar-nav');
    const bgShadow = document.querySelector('.bg-shadow');

    // @ts-ignore
    sideBar.style.left = isSidebarOpen ? '0px' : '-100%';
    // @ts-ignore
    bgShadow.style.display = isSidebarOpen ? 'block' : 'none';
  }, [isSidebarOpen]);

  const toggleSidebar = (e: any) => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  console.log('home rendering');

  return (
    <div className="d-flex">
      <Sidebar toggleSidebar={toggleSidebar}></Sidebar>
      <div className="content">
        <div className="top-navbar">
          <Button className="mt-2x top-navbar__menu-btn" appearance="transparent" size="tiny" onClick={toggleSidebar}>
            <Icon name="menu"></Icon>
          </Button>
          {/* Logo here */}
        </div>
        <HomeRouter />
      </div>
    </div>
  );
};

export default Home;
