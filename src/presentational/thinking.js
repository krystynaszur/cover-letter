import React from 'react';
import './asset.css';
import cooperatives from '../images/thinking-cooperatives.png';

const Thinking = props => (
  <div className="asset thinking">
    <h2>I'm a critical thinker</h2>
    <p class="subheader">I find it important to challenge concepts which are rarely questioned in the society. </p>
    <p class="example"> <span>For example:</span> I am interested in housing and try to show that taking out a mortgage should not be the only "proper" way to secure housing,
    as is believed by most people in my home country. I write a blog about housing policies and housing innovations, titled
    <a href="https://mieszkacinaczej.wordpress.com/" target="_blank"> Dwell Differently</a>.
    I am also a member of  <a href="http://thinkco.pl/" target="_blank">think.co</a>, the only Polish think tank which specializes in housing innovations.</p>
    <div class="see-example">
      <p>Click the image to read one my articles, written for the Cities Magazine (pp. 56-60).</p>
      <a href="https://www.sharedcities.eu/wp-content/uploads/2018/07/MagazynMiasta_CitiesMagazine_vol.1-2017_full.pdf" target="_blank"> <img src={cooperatives} /></a>
    </div>
  </div>
);

export default Thinking;