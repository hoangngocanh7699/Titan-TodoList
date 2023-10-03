import './App.css';
import Headers from './components/header/header';
import ListTodos from './components/listTodo/listTodos';
import TodoActions from './components/todoActions/todoActions';

function App() {
  return <>
    <Headers />
    <TodoActions />
    <ListTodos />
  </>
}

export default App;
