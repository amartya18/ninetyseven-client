import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 9rem; // use 5 rem instead

  @media screen and (max-width: 612px) {
  margin: 1rem 1.5rem;
  }
`;

export const Inner = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 1.5rem;
  /* grid-template-columns: repeat(auto-fit, minmax(382px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(271px, 1fr));
`;

export const Title = styled.h1`
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 70%; // 70
`;


export const Pane = styled.div`
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;
`;

export const InnerPane = styled.div`
  display: flex;
  /* grid-auto-flow: column; */
  /* align-items: center;
  justify-content: center; */
  /* grid-gap: 1rem; */

  >button {
    margin-right: 1rem;
  }
`;

export const Option = styled.button`
  cursor: pointer;
  width: 100%;
  margin-top: auto;
  display: block;
  text-align: center;
  padding: 0.8rem 0.75rem;
  font-size: 1.1rem;
  border-radius: 0.25rem;
  border: 0.5px solid grey;

  background-color: ${props => props.on === props.name ? "#0648F5" : "#fff"};
  transition: 0.3s background-color;
  color: ${props => props.on === props.name ? "#fff" : "black"};

&:hover {
  border: 0.5px solid #0648F5;
  }
`;


export const Next = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-left: auto;
  width: 24%;

  &:before {
    width: 100%;
  }

  >button {
    margin-right: 1rem;
    &:hover {
      color: #0648F5;
      background-color: #fff;
      border: 0.7px solid #0648F5;
    }
  }

  @media screen and (max-width: 855px) {
    width: 50%;

    >button {
      margin-left: 0;
    }
  }
`;