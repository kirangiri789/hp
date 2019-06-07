// sidebar.js

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Users from './user'
import Contact from './contact'
export default sidebar => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a  href="/user">
        Laravel
      </a>

      <a className="menu-item" href="/angular">
        Angular
      </a>

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>
  );
};