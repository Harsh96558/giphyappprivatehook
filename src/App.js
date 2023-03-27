
import './App.css';
import Tag from './components/Tag'
import Random from "./components/Random"

function App() {
  return (
    <div className="App background w-full h-screen flex flex-col relative overflow-x-hidden items-center">
    <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] px-[10px] py-2 text-2xl font-bold '>RANDOM GIFs</h1>
    <div className=' flex flex-col w-full items-center gap-y-10 mt-[30px]'>
      <Random/>
      <Tag/>
    </div>
   
    </div>
  );
}

export default App;
