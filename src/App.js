import { useEffect, useState } from 'react';
import './App.css';
import Headers from './components/header/header';
import ListTodos from './components/listTodo/listTodos';
import TodoActions from './components/todoActions/todoActions';
import Footer from './components/footer/footer';

function App() {
  const [input, setInput] = useState('')
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [todos, setTodos] = useState([])
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    // Khôi phục danh sách todos từ Local Storage khi component được tải lên
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Lưu trữ danh sách todos vào Local Storage khi todos thay đổi
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit)
  }

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handleAddTodos = () => {
    const newTodo = {
      id: counter,
      stt: counter,
      value: input,
    }
    setTodos([...todos, newTodo])
    setCounter(counter + 1)
    setInput('')
  }

  return <>
    <Headers />
    <TodoActions setCounter={setCounter} handleAddTodos={handleAddTodos} handleInput={handleInput} openModalEdit={openModalEdit} setOpenModalEdit={setOpenModalEdit} handleOpenModalEdit={handleOpenModalEdit} input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
    <ListTodos setCounter={setCounter} handleAddTodos={handleAddTodos} input={input} setInput={setInput} handleInput={handleInput} openModalEdit={openModalEdit} setOpenModalEdit={setOpenModalEdit} handleOpenModalEdit={handleOpenModalEdit} todos={todos} setTodos={setTodos}/>
    <Footer />
  </>
}

export default App;
