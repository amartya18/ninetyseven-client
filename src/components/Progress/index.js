import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Wrapper,
  Step,
  Text
} from './styles/progress'

export default function Progress({ step }) {
  const [status, setStatus] = useState([
    false,
    false,
    false,
    false,
    false
  ]);

  useEffect(() => {
    const temp = [false, false, false, false, false]
    for (let i = 0; i <= step; i++) {
      temp[i] = true;
    }
    setStatus(temp);
  }, [step])

  return(
    <Wrapper scroll={false}>
      <Step>
        <Text on={status[0]}>1. Model</Text>
      </Step>
      <Step>
        <Text on={status[1]}>2. Specification</Text>
      </Step>
      <Step>
        <Text on={status[2]}>3. Trim</Text>
      </Step>
      <Step>
        <Text on={status[3]}>4. Option</Text>
      </Step>
      <Step last={true}>
        <Text on={status[4]}>5. Get Offers</Text>
      </Step>
    </Wrapper>
  );
}