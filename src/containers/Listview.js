import React from 'react';
import datas from './temp-data.json';
import { Link } from 'react-router-dom'
// import components
import Listview from '../components/Listview'
import Progress from '../components/Progress'
import crv from '../images/cr-v-2.png'

import MediaQuery from 'react-responsive';

function ListviewContainer() {
  return (
    <>
      <MediaQuery minDeviceWidth={923}>
        <Progress step={0} />
      </MediaQuery>
      <h1>Choose a model of Honda</h1>
      <p>You can only choose one model</p>
      <Listview>
        {datas.map(data => (
          <Listview.Container key={data.id}>
            <Listview.Image src={crv} alt={data.title} />
            <Listview.Body>
              <Listview.Title>{data.title}</Listview.Title>
              <Listview.Text>{data.desc}</Listview.Text>
              <Link to={`/ninetyseven-client/${data.id}`}>
                <Listview.Button>{data.ctaText}</Listview.Button>
              </Link>
            </Listview.Body>
          </Listview.Container>
        ))}
      </Listview>
    </>
  );
}

export default ListviewContainer;