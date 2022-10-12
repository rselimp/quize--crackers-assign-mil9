import React from 'react';
import OptionDetails from '../OptionDetails/OptionDetails';
import Options from '../Options/Options';
import './ViewTest.css';

const ViewTest = ({viewtest}) => {
    const{question,correctAnswer} = viewtest;
    return (
        <div className='viewtest'>
            <div className='question'>
            <p>Questions:{question}</p>
            </div>
            <div className='options'>
            <p></p>
            </div>            
            <div className='correctanswer'>
            <p>CorrectAnswer:{correctAnswer}</p>
            </div>
            
            
        </div>
    );
};

export default ViewTest;
