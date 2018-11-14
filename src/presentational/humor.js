import React from 'react';
import './asset.css';

import garfield from '../images/garfield.gif';

const Humor = props => (
  <div className="asset humor">
    <h2>I've got a sense of humor</h2>
    <p class="subheader">Garfield is my alter ego. </p>
    <p class="example"> We share a dry sense of humor, a love for food and a strong conviction that cats are a superior species.</p>
    <img src={garfield} />
  </div>
);

export default Humor;