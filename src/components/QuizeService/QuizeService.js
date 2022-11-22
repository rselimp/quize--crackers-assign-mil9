import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quize from '../Quize/Quize';

const QuizeService = () => {
    const quizeservice = useLoaderData().data
   // console.log(quizeservice)
    return (
        <div>
           {
                quizeservice.map(quize =><Quize
                key={quize.id} 
                quize={quize}
                ></Quize>)
            }
        </div>
    );
};

export default QuizeService;