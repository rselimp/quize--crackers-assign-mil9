import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';


const Quize = ({ quize }) => {
    const { id, name, logo } = quize
    return (
        <div className="card bg-base-300  shadow-xl">
            <figure><img className='w-90' src={logo} alt=""/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                    <button className='btn btn-info'><p><small><Link to ={`/quize/${id}`}>Start Quiz</Link></small></p></button>
                
                </div>
            </div>
        </div>






        // <div className='quiz-start'>
        //     <p>name:{name}</p>
        //     <img src={logo} alt="" />
        //     <p><small><Link to ={`/quize/${id}`}>Start Quiz</Link></small></p>
        // </div>
    );
};

export default Quize;