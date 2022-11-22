import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Rechart from "./Rechart";
//show the statistics barchart
const Statistics = () => {
    const[data, setData] = useState();
    
    useEffect( () =>{
        const fetchDatas = async () =>{
            const res = await fetch('https://openapi.programming-hero.com/api/quiz')
            const data = await res.json();
            console.log(data);
            setData(data?.data)
        };
        fetchDatas()

    },[])
    return (
        <div>
    
            
            <Rechart data={data}></Rechart>



        </div>
    );
};

export default Statistics;