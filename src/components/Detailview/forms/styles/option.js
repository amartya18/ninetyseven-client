import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 8rem;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 2rem;
  /* grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));

  @media screen and (max-width: 768px) {
    margin: 1.5rem; 
  }
`;

export const Pane = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid grey;
  width: 100%;
  min-height: 70px;
  border-radius: 0.25rem;

  >p {
    margin: auto;
  }

  &:hover {
    border: 0.5px solid #0648F5;
    transition: 0.25s border;

    -webkit-box-shadow: 3px 3px 10px 6px rgba(228,228,228,1);
    -moz-box-shadow: 3px 3px 10px 6px rgba(228,228,228,1);
    box-shadow: 0px 3px 10px -1px rgba(108, 108, 108, 0.25);
  }
`;

export const Color = styled.span`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 1.5rem;
  background-color: ${props => props.color || ""};

  -webkit-box-shadow: 3px 3px 10px 6px rgba(228,228,228,1);
  -moz-box-shadow: 3px 3px 10px 6px rgba(228,228,228,1);
  box-shadow: 0px 3px 10px -1px rgba(108, 108, 108, 0.25);
`;