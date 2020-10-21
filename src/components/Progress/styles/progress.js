import styled,{ css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: #ffffff;
  position: sticky;
  top: 80px;
  left: 20px;
  right: 20px;
  padding-bottom: 0.5rem;

  display: flex;
  max-width: 1100px;

  // dimension msh labil
  /* margin: 0 18rem; // desktop */
  padding: 0 10rem; // desktop
  /* margin: 0 8rem; // tablets */

  align-items: center;
  height: 100px; // minimum
  
  ${props => props.scroll ? "box-shadow: 0px 4px 4px rgba(174, 174, 174, 0.25);" : ""}

`;

export const Step = styled.div`
  ${props => props.last ? 
  css`` : 
  css`
    // to center svg and space-evenly
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  `};

  &:after {
    content: ${props => props.last ? "" : "url('/assets/arrow-right.svg')" };
    margin-right: auto;
    margin-left: auto;
    padding-top: 0.3rem;
  }
`;

export const Text = styled.div`
  font-size: 0.8rem;
  font-weight: 600;

  &:after {
    content: "";
    display: block;
    position: relative;
    /* width: 100%; */
    width: 100px;
    border: ${ props => props.on ? "2px solid #0648F5" : "2px solid #CBDBFD"};
    border-radius: 1rem;
    margin-top: 8px;
  }
`;