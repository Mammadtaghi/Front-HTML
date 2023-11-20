import { useReducer } from 'react';
import './App.css';

function Reducer(state, action) {
  switch (action.type) {
    case '+':
      return {result: state.result + action.more}
    case '-':
      return {result: state.result - action.more}
    default:
      break;
  }
}

function App() {

  function Increment() {
    setOperator({type:'+', more: 10})
  }

  function Decrement() {
    setOperator({type:'-', more: 20})
  }

  const [operator, setOperator] = useReducer(Reducer, {result:0})

  return (
    <>
      <span>Count: {operator.result}</span>
      <br />

      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>

      </>
  );
}

export default App;



