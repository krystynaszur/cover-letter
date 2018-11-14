import React from 'react';
import './contact.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faLinkedin, faGithub);

const Contact = props => (
    <div class="contact">
        <h2><span>Contact me</span></h2>
        <p class="subheader"> I am looking forward to joining your team! If you wish to learn more about me, please send me an email in Polish, English or French.</p>
        <div class="contact-options">
            <div class="contact-option">
                <a href="mailto:kszurmanska@gmail.com?Subject=Hello" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} size="3x" />
                    <p>Email me at <br />kszurmanska@gmail.com</p>
                </a>
            </div>
            <div class="contact-option">
                <a href="https://www.linkedin.com/in/krystyna-szurma%C5%84ska-a8746a14/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    <p>Connect with me on  <br />LinkedIn</p>
                </a>
            </div>
            <div class="contact-option">
                <a href="https://github.com/krystynaszur" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                    <p>Follow me on  <br />Github</p>
                </a>
            </div>
        </div>
    </div>
);

export default Contact;