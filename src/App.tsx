import { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { increment, decrement } from './slices/counter/counterSlice';
function App() {

  const count = useAppSelector(state=>state.counter)
  const dispatch = useAppDispatch();
  return (
    <div className="App">
   
    <h1>Count is {count}</h1>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
