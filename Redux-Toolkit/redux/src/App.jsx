import { useRef } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddNumber, Calculate, SetNum1, SetNum2, SetOperator } from './Redux/calculatorSlice'

function App() {

  const numInp = useRef()
  const num1Inp = useRef()
  const num2Inp = useRef()
  const operatorInp = useRef()

  const Answer = useSelector(state => state.calculator.answer)
  const dispatch = useDispatch()

  function handleNum() {
    console.log(numInp.current.value);
    dispatch(AddNumber(+numInp.current.value))
  }

  function handleNum1() {
    dispatch(SetNum1(+num1Inp.current.value))
  }

  function handleNum2() {
    dispatch(SetNum2(+num2Inp.current.value))
  }

  function handleOperator() {
    dispatch(SetOperator(operatorInp.current.value))
  }

  function handleCalculate() {
    dispatch(Calculate())
  }

  return (
    <>
      <input type="number" placeholder='Number 1' ref={num1Inp} />
      <button onClick={handleNum1}>Add Number 1</button>

      <input type="number" placeholder='Number 2' ref={num2Inp} />
      <button onClick={handleNum2}>Add Number 2</button><br />

      {/* <input type="number" placeholder='Number' ref={numInp} />
      <button onClick={handleNum}>Add Number</button> */}

      <input type="text" placeholder='Operator' ref={operatorInp} />
      <button onClick={handleOperator}>Add Operator</button><br />
      <button onClick={handleCalculate}>Calculate</button>
      <hr />
      <h1>Answer: { Answer && Answer[0]}</h1>
    </>
  )
}

export default App
