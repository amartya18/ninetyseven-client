import React from 'react';
import {
  Container,
  Inner,
  Pane,
  Image,
  Icon,
  InnerPane,
  Button
} from './styles/sucess';

export default function Success({ carChosen }) {
  return (
    <Container>
      <Inner>
          <Image
            src="/images/cr-v-2.png"
            alt="honda cr-v"
          />
          <Pane>
            <h1>Great choice!</h1>
            <p>Please wait as we process your option and deliver you the best possible offers from across Indonesia.</p>
            <InnerPane>
              <Icon 
                src="/images/honda-logo.png" 
                size="70px"
              />
              <div>
                <h2>{carChosen.model}</h2>
                <h3>{carChosen.trim}</h3>
              </div>
            </InnerPane>
            <InnerPane>
              <Button to="/" active="true">Done</Button>
              <Button to="/" >Car details</Button>
            </InnerPane>
          </Pane>
      </Inner>
    </Container>
  );
}