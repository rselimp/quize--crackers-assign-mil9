import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OptionDetails from '../OptionDetails/OptionDetails';


const Options = () => {
    const options = useLoaderData().data.options
   // console.log(options)
    return (
        <div>
           {
            options.map(optionsdetails =><OptionDetails key={optionsdetails.id} optionsdetails={optionsdetails}></OptionDetails>)
           } 
        </div>
    );
};

export default Options;