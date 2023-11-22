import React from 'react'
import useLocalStorage from '../../Hooks/useLocalStorage'

function Todo() {

    const [todo, AddTodo] = useLocalStorage('todo')

  return (
    <div>
        <button onClick={AddTodo} >Add</button>
        { todo && todo.map((item)=>(
            <li>{item}</li>
        ))}
    </div>
  )
}

export default Todo