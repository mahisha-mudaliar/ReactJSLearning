import './App.css'
import imageAddress from './assets/react.svg'
import Practice from './components/Practice'
function App(){
  let count = 18;
  let styling = {backgroundColor:"yellow"};
  return (
    <>
    <h1 style ={styling}>2</h1>
    <span className='span'>How's going on</span>
    <img src={imageAddress} />
    <h1>Welcome {count}</h1>
    <Practice/>
    </>
  )
}

export default App
