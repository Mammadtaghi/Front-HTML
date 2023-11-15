import React from 'react'
import { useState } from "react";
import "./index.css"

let isReady = false
let num1
let num2

function Calculator() {
    let [nums, setNums] = useState([])
    const [answer, setAnswer] = useState()
    const [operator, setOperator] = useState("")
    
    const getNum =(e)=>{
        if (nums.join('')) {
            if (isReady) {
                num2 = +nums.join('')
                console.log(`num2 = ${num2}`);
                nums = []
                isReady = false
            }
            else{
                num1 = +nums.join('')
                console.log(`num1 = ${num1}`);
                nums = []
                isReady = true
            }
        }
        else{
            console.log("Alert");
        }
        
    }

    const Calculate = () => {
        switch (operator) {
            case "+":
                setAnswer((+num1) + (+num2))
                setNums([])
                console.log(num1, num2);
                break;

            case "-":
                setAnswer((+num1) - (+num2))
                setNums([])
                break;

            case "/":
                setAnswer((+num1) / (+num2))
                setNums([])
                break;

            case "*":
                setAnswer((+num1) * (+num2))
                setNums([])
                break;

            default:
                alert("Invalid Syntax")
                setNums([])
                break;
        }
    }

    return (
        <>
            <span>{num1}{operator}{num2}={answer}</span>
            <form>
                {/* <input type="number" onChange={getValueOne} id='numInput' />  <br /> */}
                {/* <input type="number" onChange={getValueTwo} id='numInput' />  <br /> */}
                <div className='box'>
                <input type="button" id="num1" onClick={()=>setNums([...nums,1])} value="1" />
                <input type="button" id="num2" onClick={()=>setNums([...nums,2])} value="2" />
                <input type="button" id="num3" onClick={()=>setNums([...nums,3])} value="3" />
                <input type="button" id="num4" onClick={()=>setNums([...nums,4])} value="4" />
                <input type="button" id="num5" onClick={()=>setNums([...nums,5])} value="5" />
                <input type="button" id="num6" onClick={()=>setNums([...nums,6])} value="6" />
                <input type="button" id="num7" onClick={()=>setNums([...nums,7])} value="7" />
                <input type="button" id="num8" onClick={()=>setNums([...nums,8])} value="8" />
                <input type="button" id="num9" onClick={()=>setNums([...nums,9])} value="9" />

                    <input type="button" onClick={() => setOperator("+")} value="+" /> <br />
                    <input type="button" onClick={() => setOperator("-")} value="-" /> <br />
                    <input type="button" onClick={() => setOperator("/")} value="/" /> <br />
                    <input type="button" onClick={() => setOperator("*")} value="*" /> <br />
                    <input type="button" onClick={getNum} value="Enter" /> <br />
                    <input type="button" onClick={Calculate} value="=" /> <br />
                </div>
            </form>
        </>
    )
}

export default Calculator