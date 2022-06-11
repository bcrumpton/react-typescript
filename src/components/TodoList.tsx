import React from 'react'
import { Todo } from '../model';


interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => {
        return <li>{todo.todo}</li>
      })}
    </ul>
  )
}

export default TodoList