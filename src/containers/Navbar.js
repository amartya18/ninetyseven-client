import React from 'react';
// import components
import Navbar from '../components/Navbar'

function NavbarContainer() {
  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Brand>mobilocal</Navbar.Brand>
        <Navbar.Mobile />
        <Navbar.Menu>
          {/* Navbar Items */}
          <Navbar.Item>
            <Navbar.Icon name="bx-car.svg" size="29px" />
            Garage
          </Navbar.Item>

          <Navbar.Item>
            <Navbar.Icon name="comment.svg" size="29px" />
            Chats
          </Navbar.Item>

          <Navbar.Item>
            <Navbar.Icon name="price-tag.svg" size="29px" />
            Offers
          </Navbar.Item>

          <Navbar.Item>
            <Navbar.Icon name="user-circle.svg" size="29px" />
            Account
          </Navbar.Item>
        </Navbar.Menu>

      </Navbar.Container>
    </Navbar>
  );
}

export default NavbarContainer;
