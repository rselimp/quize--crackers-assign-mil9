import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Quize from '../Quize/Quize';




const Home = () => {
    const home = useLoaderData().data
    return (
        <div>
         <div>
            <Banner></Banner>
         </div>

            <div className='grid gap-8 mt-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                home.map(quize =><Quize
                key={quize.id} 
                quize={quize}
                ></Quize>)
            }
            </div>
        </div>
    );
};

export default Home;