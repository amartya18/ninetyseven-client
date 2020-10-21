import React from 'react';
import {
  Container,
  Pane,
  Box,
  InnerBox,
  Title,
  Description,
  Details,
  InnerDetail,
  SubtitleOne,
  SubtitleTwo,
  Button
} from './styles/trim';

export default function Trim({ nextStep, prevStep, carOption, carChosen, setCarChosen, handleChange }) {
  React.useEffect(() => {
    console.log(carChosen);
  },[carChosen])

  function handleClick(value) {
    const newCar = {...carChosen};
    newCar.trim = value;
    handleChange(newCar);
    nextStep();
  }

  return (
    <Container>
      <h1>Choose a trim</h1>
      <p>Each trim is a version of the car with different machine and features</p>
      <Pane>
        {Object.entries(carOption.trim).map(data => (
          <Box>
            <InnerBox>
              <Title>{data[0]}</Title>
              <Description>{data[1].description}</Description>
            </InnerBox>
            <InnerBox left={true}>
              <Details>
                <InnerDetail>
                  <SubtitleOne>OTR from</SubtitleOne>
                  <SubtitleTwo>IDR {data[1].price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</SubtitleTwo>
                </InnerDetail>
                <Button
                  onClick={() => handleClick(data[0])}
                >Select Trim</Button>
              </Details>
            </InnerBox>
          </Box>
        ))}
      </Pane>
    </Container>
  );
}