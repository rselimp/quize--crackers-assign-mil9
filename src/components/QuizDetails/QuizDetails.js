import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ViewTest from '../ViewTest/ViewTest';
import './QuizDetails.css';

const QuizDetails = () => {
    const quize =useLoaderData().data.questions
    //console.log(quize)
    return (
        <div className='quiz-details'>
            
            {
                quize.map(viewtest =><ViewTest key ={viewtest.id} viewtest ={viewtest}></ViewTest>)
            }
        </div>
    );
};

export default QuizDetails;