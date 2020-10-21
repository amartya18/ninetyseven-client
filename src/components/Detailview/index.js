import React, { useState, useEffect } from 'react';
import item from './temp-data2.json';
import * as components from './forms';
import MediaQuery from 'react-responsive';

import Progress from '../Progress'

const type = {
  0: 'SpecificationI',
  1: 'TrimI',
  2: 'OptionI',
  3: 'SuccessI',
}

export default function Detailview({ match }) {
  const [step, setStep] = useState(0);
  // delete setCarOption for now; (warning)
  const [carOption] = useState(item);
  const initialCarChosen = {
    ...carOption,
    "specification": {
      "Fuel": "",
      "Transmission": ""
    },
    "trim": "",
    "option": {
      "color": ""
    }
  };
  const [carChosen, setCarChosen] = useState(initialCarChosen);

  const nextStep = () => {
    if (step === 3) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  }

  const prevStep = () => {
    setStep(step - 1);
  }

  // TODO
  const handleChange = input => {
    setCarChosen(input);
  }

  const Component = components[type[step]];
  return (
    <>
      <MediaQuery minDeviceWidth={923}>
        <Progress step={step + 1} />
      </MediaQuery>
      <Component
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange} // changes form state
        carOption={carOption}
        carChosen={carChosen}
      />
    </>
  );
}