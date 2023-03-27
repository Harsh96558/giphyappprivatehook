
import { useState } from 'react'
import Spinner from './Spinner'
import useGif from './useGif'




const Tag = () => {
     
    const [tag, setTag] =useState('')
    const {loading, gif , fetchData} = useGif(tag);
   



    function clickHandler(){
        fetchData(tag);
    }
    

  return (
    <div className=' w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className=' mt-[15px] text-2xl uppercase underline font-bold'>Random {tag} Gif</h1>

        {
            loading ? (<Spinner/>) :(<img src={gif} className='w-[300px] h-[300px] object-fill p-3'/>)
        }

        <input
        className='w-10/12  text-lg rounded-lg mb-[5px] text-center'
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        />

        <button onClick={clickHandler}
        className="w-10/12 bg-yellow-200  text-lg rounded-lg mb-[20px]">Generate</button>
    </div>
  )
}

export default Tag