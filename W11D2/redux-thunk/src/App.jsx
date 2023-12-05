import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from './Slices/counterSlice'
import { useRef, useState } from 'react'
import { addItem, deleteAll, deleteItem, editItem } from './Slices/todoSlice'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const Count = useSelector(state => state.counter.value)
  const Todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()

  let Edit = null
  const inp = useRef()
  const AddBtn = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    if (inp.current.value && AddBtn.current.innerText === 'Add Todo') {
      dispatch(addItem({ id: uuidv4(), name: inp.current.value }))
    }
    if (AddBtn.current.innerText === 'Edit Todo') {
      Edit.name = inp.current.value
      dispatch(editItem(Edit))
      AddBtn.current.innerText = 'Add Todo'
      Edit = null
    }
    inp.current.value = ''
  }

  function handleDelete(id) {
    dispatch(deleteItem(id))
  }

  function handleEdit(item) {
    AddBtn.current.innerText = 'Edit Todo'
    Edit = { name: item.name, id: item.id }
    inp.current.value = item.name
  }

  return (
    <>
      <p>{Count}</p>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>+</button>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={inp} />
        <button type='submit' ref={AddBtn} onClick={handleSubmit}>Add Todo</button> <br />
      </form>
      <ul>
        {Todos.length > 0 ? Todos.map((item) => (
          <div style={{ display: 'flex', alignItems: 'center' }} key={uuidv4()}>
            <li>{item.name}</li>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleEdit(item)}>Edit</button>
          </div>
        )) : null}
      </ul>
      <button onClick={() => dispatch(deleteAll())}>Delete All</button>
    </>
  )
}

export default App
