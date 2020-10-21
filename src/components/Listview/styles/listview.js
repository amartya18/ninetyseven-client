import styled from 'styled-components';

export const Container = styled.div`
  /* padding: 2rem; */
  padding: 2rem 9rem;
  display: grid;
  align-items: center;
  justify-items: center;
  /* grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 3rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
    grid-gap: 1.5rem;
  }
`;

export const Box = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 230px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  /* border-radius: 0.75rem; */
  border-radius: 1.3rem;
  overflow: hidden;
  border: 2px solid rgba(0, 0, 0, 0.125);

  /* -webkit-box-shadow: 3px 3px 10px 6px rgba(217,217,217,1); */
  -webkit-box-shadow: 3px 3px 10px 6px rgba(228,228,228,1);
  -moz-box-shadow: 3px 3px 10px 6px rgba(228,228,228,1);
  box-shadow: 3px 3px 10px 6px rgba(228,228,228,1);

  &:hover {
    border: 2px solid #0648F5;
    transition: border 0.7s linear
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;

`;
export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

export const Text = styled.p`
  line-height: 25px;
  color: #6c757d;
`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

export const Brand = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: auto;
  width: 100%;
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
    color: #fff;
    background-color: #003ace;
  }
`;