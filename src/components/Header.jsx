import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar  color="faded" light style={{ backgroundColor: '#4a07b5' }} >
        <NavbarBrand href="/" className="me-auto text-light">
          Workshop
        </NavbarBrand>
        <NavbarToggler   color="faded" onClick={toggleNavbar} className="me-2 bg-light" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className='text-light' href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-light' href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;