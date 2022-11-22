import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OptionDetails from './OptionDetails';
import { FaPhabricator } from 'react-icons/fa';
import { useState } from 'react';




const ViewQuizeDetails = ({ viewtest}) => {
    
    const { question, options, correctAnswer,optiondetail } = viewtest;
   // console.log(options)
    //console.log(correctAnswer);

    const handleOnClick  =(correctAnswer)=>{  
       alert(`correct Answer:  ${correctAnswer}`)
    }
    return (
        <div className='text-4xl'>
            {question}
            <div onClick={() =>handleOnClick(correctAnswer)}>
                <p style={{marginLeft:'1450px'}} className=''><span><FaPhabricator><title>{correctAnswer}</title></FaPhabricator></span></p>
            </div>           
                <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1  gap-6 p-4'>
                    {
                        options.map(optiondetail => <OptionDetails key={optiondetail.id} optiondetail={optiondetail}
                            correctAnswer={correctAnswer}></OptionDetails>)
                    }
                </div>

        





        </div>
    );
};

export default ViewQuizeDetails;