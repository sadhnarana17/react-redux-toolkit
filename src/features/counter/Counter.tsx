import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { increment, decrement, incrementByAmount } from './counterReducer';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return(<div>
      <p>{count}</p>
     <div style={{
       width: '100%',
       display: 'flex',
       justifyContent: 'space-between'
     }}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by amount(2)
        </button>
      </div>
  </div>)
}

export default Counter;
