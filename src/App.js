import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {IncrementAction,DecrementAction,resetAction} from  './store/action/CounterAction'

function App() {
  const counterNum = useSelector((store) => store.CounterReducer)
  console.log(counterNum)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Increment/Decrement counter app</h1>
      <h3>using React & Redux</h3>
      <div className='buttonDiv'>
        <button className='counterButton' onClick={()=>dispatch(DecrementAction(5))}>-</button>
        <span className='counter'>{counterNum}</span>
        <button className='counterButton' onClick={()=>dispatch(IncrementAction(5))}>+</button>
        <button className='resetButton' onClick={()=>dispatch(resetAction())}>Reset</button>
      </div>
    </div>
  );
}

export default App;
