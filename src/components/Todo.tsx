import { api } from "~/utils/api";
import { TodoType } from "./TodoList";

const Todo = ({ todo }: { todo: TodoType }) => {
  return (
    <li key={todo.id} className="flex items-center gap-2">
      <input
        type="checkbox"
        className="checkbox-primary checkbox"
        name="isDone"
        onChange={(e) => api.todo.create.useMutation()}
        checked={todo.isDone}
        id={todo.id}
      />
      <span>{todo.task}</span>
    </li>
  );
};
export default Todo;
