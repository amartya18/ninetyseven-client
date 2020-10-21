import React from 'react';
import {
  Container,
  Title,
  Inner,
  Image,
  Pane,
  InnerPane,
  Option,
  Next
} from './styles/specification'

export default function SpecificationF({ nextStep, prevStep, handleChange, carOption, carChosen, setCarChosen }) {
  React.useEffect(() => {
  }, [carChosen]);

  function handleClick(type, value) {
    const newCar = { ...carChosen }
    newCar.specification[type] = value;
    // setCarChosen(newCar);
    handleChange(newCar);
  }

  return (
    <Container>
      <Title>Choose a specification for your {carOption.brand} {carOption.model}</Title>
      <p>You can only choose one car model</p>
      <Inner>
        <Image
          src="/images/cr-v-2.png"
          alt="honda cr-v"
        />
        <Pane>
          {Object.entries(carOption.specification).map(data => (
            <>
              <h3>{data[0]}</h3>
              <InnerPane>
                {data[1].map(option => (
                  <Option
                    on={carChosen.specification[data[0]]}
                    name={option}
                    onClick={() => handleClick(data[0], option)}
                  >
                    {option}
                  </Option>
                ))}
              </InnerPane>
            </>
          ))}
        </Pane>
      </Inner>
      <Next>
        <Option
          onClick={nextStep}
        >
          Next
        </Option>
      </Next>
    </Container>
  );
}