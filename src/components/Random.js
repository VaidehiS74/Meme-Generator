import React, { useState } from 'react'
import {useEffect} from 'react'
import axios from "axios";
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const API_KEY='0qWG5IsAWUPhC4h0MhkiBMoRxoVc9dB2';
const Random = () => {

    const {gif, loading, fetchData} = useGif();

    return (
        <div className='w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className="text-2xl underline uppercase font-bold mt-[15px]" >A Random Gif</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450"></img>)
            }
            

            <button onClick={() => fetchData()}
            className="w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>
        </div>
    )
}

export default Random;