import React, { useEffect, useState } from 'react';
import GridBox from './GridBox';

const Grid = () => {
    const [alList, setAiList] = useState([])
    useEffect(() => {
        const loadData = async() => {
            const url = await fetch("https://openapi.programming-hero.com/api/ai/tools");
            const responce = await url.json();
            const aiArray = setAiList(responce.data.tools)
        }
        loadData()
    }, []);
    const [dataSlice, setDataSlice] = useState(3)
    const sliceHandle = () => {
        if(dataSlice < alList.length){
            setDataSlice(dataSlice + 3);
            if(dataSlice >= alList.length){
                document.querySelector("#seeMore").classList.add("hidden")
            }
        }
    }
    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-10'>Welocme to AI word. ROBOT will do everything</h1>
            <div className='grid grid-cols-3 gap-3 w-8/12 mx-auto'>
                {
                    alList.slice(0, dataSlice).map( ai => <GridBox>{ai}</GridBox>
                    )
                }
            </div>
            <div className='flex justify-center mt-10'>
               <button id='seeMore' className="btn-accent py-2 px-5 rounded-lg" onClick={sliceHandle}>Show More</button>
            </div>
        </div>
    );
};

export default Grid;