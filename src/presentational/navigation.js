import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css';
import krystyna from '../images/krystyna-dark.jpg';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faQuestionCircle, faSmileWink, faHandPeace } from '@fortawesome/free-regular-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'

library.add(faLightbulb, faQuestionCircle, faSmileWink, faHandPeace, faLaptop);

const Navigation = props => (
    <div>
        <nav id="top-navigation" className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <p className="navbar-brand"><Link to="/">Let's work together!</Link></p>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="main">
            <div className="left-image">
                <img src={krystyna} />
            </div>
            <div className="content container-fluid">
                {props.children}
            </div>
        </div>
        <aside>
            <nav className="navbar">
                <ul className="nav flex-column">
                    <li className="nav-item"><Link to="/creativity"><FontAwesomeIcon icon = {faLightbulb} size = "3x" /><p>Creativity</p></Link></li>
                    <li className="nav-item"><Link to="/thinking"><FontAwesomeIcon icon = {faQuestionCircle} size = "3x" /><p>Critical thinking</p></Link></li>
                    <li className="nav-item"><Link to="/fun"><FontAwesomeIcon icon = {faHandPeace} size = "3x" /><p>Fun</p></Link></li>
                    <li className="nav-item"><Link to="/humor"><FontAwesomeIcon icon = {faSmileWink} size = "3x" /><p>Sense of humour</p></Link></li>
                    <li className="nav-item"><Link to="/passion"><FontAwesomeIcon icon = {faLaptop} size = "3x" /><p>Passion</p></Link></li>
                </ul>
            </nav>
        </aside>
    </div>

);

export default Navigation;