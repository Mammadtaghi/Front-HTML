import './App.css';
import { useState } from "react";
import { Message } from './Type/type';
import ToDo from './Components/Todo';
import * as React from 'react';
const App: React.FC = () => {

  const inp = React.useRef<HTMLInputElement>(null)

  const [count, setCount] = useState<number>(0)
  const [todo, setTodo] = useState<string>('')
  const [Todos, setTodos] = useState<Message[]>([])
  const [memo, setMemo] = useState<Message | null>(null)

  function handleTodo(todo: string) {
    setTodo(todo)
  }

  function AddTodo(todo: string) {

    if (!memo) {
      setTodos([...Todos, { id: Todos.length + 1, text: todo }])

    }
    if (memo) {
      const index = Todos.findIndex((item)=> item.id === memo?.id)
      const TodosCopy = [...Todos]
      TodosCopy[index].text = todo
      setTodos(TodosCopy)
      setMemo(null)
    }

    // use this later (Accidentally I placed it in correct place)
    if (inp.current) {
      inp.current.value = ''
    }
  }

  function DeleteItem(id: number) {
    setTodos(Todos.filter((x) => x.id !== id))
  }

  function EditItem(Obj: Message) {
      setMemo(Obj)
      if (inp.current) {
        inp.current.value = Obj.text
      }
    console.log(Obj);

  }

  return (
    <>
      <h1>COUNTER</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <hr />
      <input type="text" ref={inp} onChange={(e) => handleTodo(e.target.value)} />
      <button onClick={() => AddTodo(todo)}>{ memo ? "Edit ToDo" : 'Add ToDo'}</button>
      {Todos && Todos.map((todo) => (
        <ToDo key={todo.id} id={todo.id} text={todo.text} DeleteItem={DeleteItem} EditItem={EditItem} />
      ))}
    </>
  );
}

export default App;
