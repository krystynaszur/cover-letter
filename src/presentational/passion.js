import React from 'react';
import './asset.css';
import portfolio from '../images/portfolio.png';

const Passion = props => (
  <div className="asset passion">
    <h2>I'm passionate about coding</h2>
    <p class="subheader">I enjoy learning new programming languages because I find it satisfying to create a clean and well-structured code. </p>
    <p class="example">I am studying web development every day. I am focused on JavaScript because I like the versatility of this language.
    For the time being, I am exploring front-end development (mostly React), but I am also very curious of back-end development. The next technology I hope to understand in deep
    is Node.js. </p>
    <div class="see-example">
      <p>Click the image to visit my portfolio.</p>
      <a href="https://krystynaszur.github.io/portfolio-website/" target="_blank"><img src={portfolio} /></a>
    </div>
  </div>
);

export default Passion;