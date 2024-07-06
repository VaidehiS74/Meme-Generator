import React, { useState } from 'react'
import {useEffect} from 'react'
import axios from "axios";
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {

    const[tag,setTag] = useState('');

    const {gif, loading , fetchData} = useGif(tag);

  return (
    <div className='w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[45px]'>
        <h1 className="text-2xl underline uppercase font-bold mt-[15px]" >Random {tag} Gif</h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} width="450"></img>)
        }
        
        <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        value={tag}
        onChange={(event) => {setTag(event.target.value)}}
        
        ></input>

        <button onClick={() => fetchData(tag)}
        className="w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg mb-[20px]">
            Generate
        </button>
    </div>
  )
}

export default Tag;