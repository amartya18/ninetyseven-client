import styled from 'styled-components/macro';
import { ReactSVG } from 'react-svg';

export const Navbar = styled.nav`
  background: #ffffff;;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    padding: 0 5px;
  }
`;

export const Brand = styled.span`
  color: #0648F5;;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.5625rem; // 41px
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  display: ${({ on }) => (on ? "none" : "")};

  @media screen and (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

export const Mobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #0648F5;;

    > div {
      margin-top: -3px;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li`
  height: 100%;
  margin: 0 5px;

  &:hover {
    background-color: rgb(231, 231, 231);
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
`;

export const Links = styled.a`
  color: #0648F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  font-size: 0.7rem;
  font-weight: 600;

  /* when link clicked */
  &:hover {
    /* border-bottom: 3px solid #0648F5; */
    /* background-color: rgb(231, 231, 231);
    border-radius: 4px;
    transition: all 0.2s ease-out; */
  }
`;

export const Icon = styled(ReactSVG)`
  padding-bottom: 2.5px;
  svg {
    fill: #0648F5;
    height: ${props => props.inputsize};
    width: auto;
    path {
      fill: #0648F5;
    }
  }

  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

// Navbar Mobile View
// -------------------

export const MobileContainer = styled.aside`
  position: fixed;
  z-index: 999; // (?)
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${props => (props.isOpen ? "100%" : "0")};
  /* not sure why animation does not  */
  top: ${props => (props.isOpen ? "0" : "-100%")};
  /* top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; */
`;
 
export const MobileWrapper = styled.div`
  /* color: black; */
`;

export const MobileMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  padding: 0;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const MobileLinks = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #0648F5;
  cursor: pointer;

  &:hover {
    color: black;
    transition: 0.2s ease-in-out;
    /* border-bottom: 3px solid black; */
  }

  > div {
    padding-right: 10px;
    padding-top: 7px;
  }
`;