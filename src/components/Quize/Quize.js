import React from 'react';
import { Link } from 'react-router-dom';
import './Quize.css';

const Quize = ({quize}) => {
    const {id,name,logo} = quize
    return (
        <div className='quiz-start'>
            <p>name:{name}</p>
            <img src={logo} alt="" />
            <p><small><Link to ={`/quize/${id}`}>Start Quiz</Link></small></p>
        </div>
    );
};  

export default Quize;