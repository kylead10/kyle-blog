import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <h1>Hacker News Clone</h1>
      <div className='nav-link'>
        <NavLink
          to='/top'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Top Stories
        </NavLink>
        <NavLink to='/new'>Latest Stories</NavLink>
        <NavLink to='/best'>Best Stories</NavLink>
      </div>
    </React.Fragment>
  );
};

export default Header;
