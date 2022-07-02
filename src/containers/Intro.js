import React from 'react';
import './Intro.css';

const Intro = (props) => {
    return(
        <div className = 'f1 tc'>
            <h1 className='css'>This is my React App</h1>
            <p>{props.greetings}</p>
        </div>
    );
}

export default Intro;