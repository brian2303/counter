import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { increaseCounterAction } from "./Modules/counter"

const Counter1 = () => {
  const dispatch = useDispatch();
  const counterState = useSelector(state => state.counter)
  return (
    <>
      <p>current: {counterState}</p>
      <button onClick={() => dispatch(increaseCounterAction())}>
        INCREMENT
      </button>
    </>
  )
}


const Counter2 = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <p>Current: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        INCREMENT
      </button>
    </>
  )
}


function App() {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;
