import React, { useState } from 'react'
import {useEffect} from 'react'
import axios from "axios";


const API_KEY='0qWG5IsAWUPhC4h0MhkiBMoRxoVc9dB2';
const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  
const [gif,setGif] = useState("");
const [loading,setLoading] = useState('false');

async function fetchData(tag){
    setLoading(true);

    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
}

useEffect(() => {
    fetchData();
},[])

return{gif,loading,fetchData}
}

export default useGif