import React from 'react';
import {
  Container,
  Pane,
  Color
} from './styles/option'

export default function Option({ nextStep, prevStep, carOption, carChosen, handleChange }) {

  function handleClick(value) {
    const newCar = {...carChosen};
    newCar.option.color = value;
    handleChange(newCar);
    nextStep();
  }

  return (
    <>
      <h1>Customize your car</h1>
      <p>Each trim is a version of the car with different machines and features</p>
      <Container>
        {Object.entries(carOption.option.color).map(data => (
        <Pane
          onClick={() => handleClick(data[0])}
        >
          <Color color={data[1]} />
          <p>{data[0]}</p>
        </Pane>
        ))}
      </Container>
    </>
  );
}