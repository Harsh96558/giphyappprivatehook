
import { useState } from 'react'
import { useEffect } from 'react'

const API_KEY="M03nznyCEMzx85vJQLSsUJ3decWS2XXU"
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


const useGif = (tag) => {
   
    const [gif, setGif]=useState('')
    const [loading, setloading]=useState(false)
    

    async function fetchData(tag){
        try {
            
        
        setloading(true)
       
        const output=await fetch(tag ? `${url}&tag=${tag}` : (url))
        const data= await output.json()
        const imageSource=data.data.images.downsized_large.url;

        

        setGif(imageSource)
        setloading(false)
        }
        catch (error) {
            alert("Please Check Your Internet Connection")
            
        }

    }
    useEffect(()=>{
fetchData();
    },[])



  
    

  return {gif,loading,fetchData};
}

export default useGif