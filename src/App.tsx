import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { Todo } from './model'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
    setTodo("");

    console.log(todo)
    console.log(todos)

  }

  return (
    <div className="App">
      <h1>Tasket</h1>
      <Form todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
