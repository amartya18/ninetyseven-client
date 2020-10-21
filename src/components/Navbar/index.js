import React,{ useState, useCallback, useMemo } from 'react';
import { useContext } from 'react';
// react-springs for future animation

import {
  Navbar as Wrapper,
  Container,
  Brand,
  Mobile,
  Menu,
  Item,
  Links,
  Icon,
  // Mobile
  MobileContainer,
  MobileWrapper,
  MobileMenu,
  MobileLinks,
} from './styles/navbar';

const NavbarContext = React.createContext();

export default function Navbar({ children }) {
  // use context for states inside the navbar
  const [mobile,setMobile] = useState(false);
  const navbar = useCallback(() => setMobile(old => !old),[]);

  // memoized states
  // eslint-disable-next-line
  const value = useMemo(() => ({mobile, navbar}), [mobile]); // react complains dependency is missing

  return(
    // pass value to provider if state is needed
    <NavbarContext.Provider value={value}> 
        {children}
    </NavbarContext.Provider>
  );
}

function useNavbarContext() {
  const context = useContext(NavbarContext);
  if(!context) {
    throw new Error(
      `Navbar compound components cannot be rendered outside Navbar component`
    );
  }
  return context
}

function NavbarContainer({ children }) {
  const { mobile } = useNavbarContext();
  // AnimatedComponent could be added after Wrapper
  return (
    <>
      <MobileContainer isOpen={mobile}>
        <MobileWrapper>
          {children}
        </MobileWrapper>
      </MobileContainer>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
}

function NavbarBrand({ children }) {
  const { mobile } = useNavbarContext();
  return(
    <Brand on={mobile}>{children}</Brand>
  );
}

// if mobile return different styled component (base on mobile state)
function NavbarMenu({ children }) {
  const { mobile } = useNavbarContext();
  return (mobile ?
    (<MobileMenu>{children}</MobileMenu>) :
    (<Menu>{children}</Menu>)
  );
}

function NavbarItem({ children }) {
  const { mobile } = useNavbarContext();
  return( mobile ?
    (<MobileLinks>{children}</MobileLinks>) :
    (<Item>
      <Links>
        {children}
      </Links>
    </Item>)
  );
}

function NavbarIcon({ name, size, ...restProps }) {
  return(
    <Icon 
      src={`/assets/${name}`} 
      inputsize={size}
      {...restProps} 
    />
  );
}

// mobile, menu, item, links
function NavbarMobile() {
  const { mobile,navbar } = useNavbarContext();
  return(
    <Mobile>
      {mobile ? 
      (<Navbar.Icon onClick={navbar} name="close-outline.svg" size="35px" />) : 
      (<Navbar.Icon onClick={navbar} name="menu-outline.svg" size="35px" />)}
    </Mobile>
  );
}

Navbar.Container = NavbarContainer;
Navbar.Brand = NavbarBrand;
Navbar.Mobile = NavbarMobile;
Navbar.Menu = NavbarMenu;
Navbar.Item = NavbarItem;

Navbar.Icon = NavbarIcon;