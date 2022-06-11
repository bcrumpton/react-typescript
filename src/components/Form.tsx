import React from 'react'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Form: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form action="" onSubmit={handleAdd}>
      <div className="input-group">
        <label>
          Enter a task
        </label>
        <input
          className="input-box"
          type="text"
          placeholder="Task Name"
          value={todo}
          onChange={(e) => setTodo(e.target.value)} />
        <input
          type="submit"
          value="Add" />
      </div>
    </form>
  )
}

export default Form