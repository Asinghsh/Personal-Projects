import React from 'react'
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [name,setName]=useState("Anurag");
  const [isPending,setIsPending]=useState(true);
  const [error,setError]=useState(null);


    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error('Could not able to fetch data for that resource!');
            }
            return res.json()
        })
        .then(data=>{
            console.log(data);
            setData(data);
            setIsPending(false);
        })
        .catch((error)=>{
            setError(error.message);
            setIsPending(false);
            //setError(null);
        })
        },1000);
      },[url])
      return {data,isPending,error};
}

export default useFetch