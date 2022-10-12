import React from 'react';

const OptionDetails = ({optionsdetails}) => {
    const{options}= optionsdetails;
    console.log(optionsdetails);

    return (
        <div>
            <p>options:{options}</p>
        </div>
    );
};

export default OptionDetails;