import React from 'react';
import './asset.css';
import './creativity.css';
import habitatOld from '../images/habitat-old.png';
import habitatNew from '../images/habitat-new.png';

const Creativity = props => (
  <div className="asset creativity">
    <h2>I'm creative</h2>
    <p class="subheader"> I always come up with ideas for improvement, even when I have limited resources. </p>
    <p class="example"> <span>For example:</span> I improved the online presence of Habitat for Humanity Poland, a non-governmental organisation
    where I worked as a communications officer between 2016 and 2018. Because the organisation had limited funds for redesigning its website,
     I obtained pro-bono support from user-experience designers who helped me to create a new, user-friendly interface. </p>
    <p class="see-example">Flip the image to see how my creativity made up for the financial limitations.</p>
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <p>2016: old-fashioned design, complicated interface</p>
          <img src={habitatOld} />
        </div>
        <div class="back">
          <p> 2018: modern design, user-friendly interface</p>
          <img src={habitatNew} />
        </div>
      </div>
    </div>
  </div>

);

export default Creativity;