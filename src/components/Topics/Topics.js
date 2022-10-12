import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quize from '../Quize/Quize';
import './Topics.css';

const Topics = () => {
    const topics = useLoaderData().data;
    //console.log(topics)
    return (
        <div className='quiz'>
            {
                topics.map(quize =><Quize
                key={quize.id} 
                quize={quize}
                ></Quize>)
            }
        </div>
    );
};

export default Topics;