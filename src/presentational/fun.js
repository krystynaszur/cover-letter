import React from 'react';
import './asset.css';

const Fun = props => (
  <div className="asset fun">
    <h2>I'm fun</h2>
    <p class="subheader">I have plenty of hobbies and I am never bored. </p>
    <p class="example"> <span>For example:</span> I love dancing. I dance lindy hop, a swing dance from 1930s. I especially enjoy the vintage aesthetics and the friendly atmosphere which is characteristic of lindy hop parties.
    Wherever I travel, I try to find dance classes and events. </p>
    <p class="see-example">Check out the video in which I dance at one of lindy hop festivals in Warsaw.</p>
    <iframe width="80%" height="350" src="https://www.youtube.com/embed/neNWzwefKVc?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
);

export default Fun;