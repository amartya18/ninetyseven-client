import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
  margin: 1rem 11rem;

  @media screen and (max-width: 768px) {
    margin: 1rem 1.5rem;
  }
`;

export const Inner = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(271px, 1fr));
`;

export const Pane = styled.div`
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;
  margin-left: 1rem;

  >h1 {
    font-size: 2.3rem;
    font-weight: 800;
  }

  >p {
    max-width: 500px;
    font-size: 1.1rem;
  }

`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 90%; // 70
`;

export const Icon = styled.img`
  height: auto;
  object-fit: contain;
  width: ${props => props.size || ""};
  margin-right: 1rem;
`;

export const InnerPane = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 1rem;

  >div h3 {
    margin: 0;
  }

  >div h2 {
    margin: 0;
  }
`;

export const Button = styled(Link)`
  cursor: pointer;
  width: 100%;
  margin-top: auto;
  margin-right: 1rem;
  display: block;
  text-align: center;
  padding: 0.8rem 0.75rem;
  font-size: 1.1rem;
  border-radius: 0.25rem;
  border: 0.5px solid grey;
  text-decoration: none;

  background-color: ${props => props.active ? "#0648F5" : "#fff"};
  transition: 0.3s background-color;
  color: ${props => props.active ? "#fff" : "black"};

  &:hover {
    border: 0.5px solid #0648F5;
  }
`;