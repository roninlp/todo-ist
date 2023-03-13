import { useState } from "react";
import { api } from "~/utils/api";
import { TodoType } from "./TodoList";

const Todo = ({ todo }: { todo: TodoType }) => {
  const [completed, setCompleted] = useState(todo.isDone);

  const editTask = api.todo.edit.useMutation();

  return (
    <li key={todo.id} className="mt-2 flex items-center gap-2">
      <input
        type="checkbox"
        className="checkbox-primary checkbox"
        name="isDone"
        onChange={(e) => {
          const checked = e.currentTarget.checked;
          setCompleted(checked);
          editTask.mutate({ id: todo.id, data: { isDone: checked } });
        }}
        checked={completed}
        id={todo.id}
      />
      <span>{todo.task}</span>
    </li>
  );
};
export default Todo;
