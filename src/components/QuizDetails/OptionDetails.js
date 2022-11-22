import React, { useState } from 'react';



const OptionDetails = ({optiondetail,correctAnswer}) => {
    const [isChecked, setIsChecked] = useState(false);
  
    
const handleOnChange  =()=>{
    setIsChecked(!isChecked);
    
    if(optiondetail=== correctAnswer){
        alert('correct answer')
    }
    else{
        alert('Wrong answer')
    }
}
    return (
        <div className='p-4 border-4 w-3/7 text-left text-xl gap-4'> 
            <input type="checkbox" checked={isChecked }
          onChange={handleOnChange}/>
             
           {optiondetail}
        </div>
    );
};

export default OptionDetails;