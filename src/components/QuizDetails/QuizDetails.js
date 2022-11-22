import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ViewQuizeDetails from './ViewQuizeDetails';


const QuizDetails = () => {
    const quize =useLoaderData().data.questions
    //console.log(quize)

    return (
        <div className=' text-center text-2xl'>
            <div className=''>
            {
                quize.map(viewtest =><ViewQuizeDetails key ={viewtest.id} viewtest ={viewtest}></ViewQuizeDetails>)
            }
            <p></p>
            </div>
            
        </div>
    );
};

export default QuizDetails;