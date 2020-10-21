import React from 'react';
// import components
import Navbar from '../components/Navbar'
// temp icons import
import car from '../assets/bx-car.svg';
import comment from '../assets/comment.svg';
import tag from '../assets/price-tag.svg';
import user from '../assets/user-circle.svg';

function NavbarContainer() {
  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Brand>mobilocal</Navbar.Brand>
        <Navbar.Mobile />
        <Navbar.Menu>
          <Navbar.Item>
            <Navbar.Icon name={car} size="29px" />
            Garage
          </Navbar.Item>

          <Navbar.Item>
            <Navbar.Icon name={comment} size="29px" />
            Chats
          </Navbar.Item>

          <Navbar.Item>
            <Navbar.Icon name={tag} size="29px" />
            Offers
          </Navbar.Item>

          <Navbar.Item>
            <Navbar.Icon name={user} size="29px" />
            Account
          </Navbar.Item>
        </Navbar.Menu>

      </Navbar.Container>
    </Navbar>
  );
}

export default NavbarContainer;
