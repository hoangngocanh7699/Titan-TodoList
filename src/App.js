import { useState } from 'react';
import './App.css';
import Headers from './components/header/header';
import ListTodos from './components/listTodo/listTodos';
import TodoActions from './components/todoActions/todoActions';

function App() {

  const [editTodo, setEditTodo] = useState(false)
  const [input, setInput] = useState('')

  const handleEditTodo = () => {
    setEditTodo(!editTodo)
  }

  return <>
    <Headers />
    <TodoActions editTodo={editTodo} setEditTodo={setEditTodo} handleEditTodo={handleEditTodo} input={input} setInput={setInput}/>
    <ListTodos editTodo={editTodo} setEditTodo={setEditTodo} handleEditTodo={handleEditTodo}/>
  </>
}

export default App;
