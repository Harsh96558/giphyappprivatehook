
import Spinner from './Spinner'
import useGif from './useGif'




const Random = () => {
    const {gif, loading, fetchData}=useGif();
     
   

    function clickHandler(){
        fetchData();
    }


  return (
    <div className=' w-1/2  bg-green-300 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className=' mt-[15px] text-2xl uppercase underline font-bold'>A Random Gif</h1>

        {
            loading ? (<Spinner/>) :(<img src={gif} className='w-[300px] h-[300px] object-fill p-3'/>)
        }
        
        <button onClick={clickHandler}
        className="w-10/12 bg-yellow-200  text-lg rounded-lg mb-[20px]">Generate</button>
    </div>
  )
}

export default Random