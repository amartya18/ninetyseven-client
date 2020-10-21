import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 1rem 9rem;

  @media screen and (max-width: 768px) {
    margin: 1rem 1rem;
  }
`;

export const Pane = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-gap: 1rem;
  }
`;

export const Box = styled.div`
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  min-height: 163px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 0.5rem;
  padding-bottom: 1rem;

  border: 2px solid rgba(0, 0, 0, 0.125);
  -webkit-box-shadow: 3px 3px 10px 6px rgba(228,228,228,1);
  -moz-box-shadow: 3px 3px 10px 6px rgba(228,228,228,1);
  box-shadow: 3px 3px 10px 6px rgba(228,228,228,1);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InnerBox = styled.div`
  padding: 0 1.5rem;
  position: relative;

  @media screen and (min-width: 768px) {
    ${props => props.left ?
      css`
        &:after {
          content: ""; 
          position: absolute;
          left: 0px;
          top: 12.5%;
          height: 75%;
          border-left: 1px solid black; 
        }
      ` : css`` 
    };
  }
`;

export const Title = styled.h1`
  font-size: 1.37rem;
  font-weight: 800;
  text-align: left;
`;

export const Description = styled.p`
  font-size: 12px;
  text-align: left;
`;

export const Details = styled.div`
  display: grid;
  /* align-items: center; */
  /* grid-auto-flow: column; */
  /* grid-gap: 0.5rem; */
  grid-template-columns: 1.5fr 1fr;
  margin: 0;

  @media screen and (max-width: 977px) {
  grid-template-columns: 1fr;
  }
`;

export const InnerDetail = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 1fr 2fr);
`;

export const SubtitleOne = styled.h2`
  font-size: 15px;
  text-align: left;
  margin: 0.3rem 0;
`;
export const SubtitleTwo = styled.h3`
  font-size: 25px;
  font-weight: 800;
  text-align: left;
  margin: auto 0;
`;

export const Button = styled.button`
  /* max-height */
  min-height: 3rem;
  cursor: pointer;
  margin-top: auto;
  max-width: 200px;
  color: #fff;
  background-color: #0648F5;;
  border-color: #0648F5;;
  display: block;
  font-weight: bold;
  text-align: center;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    color: #0648F5;
    background-color: #fff;
    border: 0.7px solid #0648F5;
  }
`;