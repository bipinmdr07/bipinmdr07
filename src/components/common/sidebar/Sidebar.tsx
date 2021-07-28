import { NavLink, Link } from 'react-router-dom';

import * as routes from 'constants/routes';
import Button from 'components/common/button';
import Icon, { Name } from 'components/common/icon';

type ToggleSidebar = (e: any) => void;

interface SidebarProps {
  toggleSidebar: ToggleSidebar;
}

const Sidebar = (props: SidebarProps) => {
  const { toggleSidebar } = props;

  const navItems = [
    {
      icon: 'home',
      label: 'Home',
      navLink: routes.HOME,
    },
    {
      icon: 'timeline',
      label: 'Experience',
      navLink: routes.EXPERIENCE,
    },
    {
      icon: 'phonelink',
      label: 'Portfolio',
      navLink: routes.PORTFOLIO,
    },
    {
      icon: 'assignment',
      label: 'Resume',
      navLink: routes.RESUME,
    },
  ];

  return (
    <>
      <div className="bg-shadow" onClick={toggleSidebar}></div>
      <nav className="sidebar-nav">
        <div className="sidebar-nav__logo-wrapper mb-7x">
          <Link to={routes.HOME}>Bipin Manandhar</Link>
          <Button className="sidebar-nav__close-btn" size="tiny" appearance="transparent" onClick={toggleSidebar}>
            <Icon name="close"></Icon>
          </Button>
        </div>
        <ul className="sidebar-nav__list">
          {navItems.map((navItem, index) => {
            const { label, navLink } = navItem;
            const icon = navItem.icon as Name;

            return (
              <li className="sidebar-nav__item" key={`item-${index}`}>
                <NavLink
                  exact
                  to={navLink}
                  className="sidebar-nav__link"
                  activeClassName="sidebar-nav__link--active"
                  activeStyle={{ color: 'red' }}
                >
                  <Icon name={icon} className="sidebar-nav__item__icon" />
                  <span>{label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
