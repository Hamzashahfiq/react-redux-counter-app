import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const counterNum = useSelector((store)=>store.CounterReducer)
  return (
    <div className="App">
       <h1>Increment/Decrement counter app</h1>
       <h3>using React & Redux</h3>
      <div className='buttonDiv'><button className='counterButton'>-</button><span className='counter'>{counterNum}</span><button className='counterButton'>+</button> <button className='resetButton'>Reset</button></div>
    </div>
  );
}

export default App;
