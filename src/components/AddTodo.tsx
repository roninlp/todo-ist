import { useState } from "react";

type AddTodoProps = {
  toggle: () => void;
};

const AddTodo = ({ toggle }: AddTodoProps) => {
  const [taskInput, setTaskInput] = useState("");

  return (
    <div className="group w-full overflow-hidden rounded-xl border border-gray-200 p-2 ">
      <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <input
          className="input-ghost input input-xs w-full max-w-xs"
          type="text"
          onChange={(e) => setTaskInput(e.target.value)}
          value={taskInput}
          name="task"
          id="task"
          placeholder="Task name"
        />
        <textarea
          className="textarea-ghost textarea textarea-xs"
          name="desc"
          id="desc"
          cols={30}
          rows={2}
          placeholder="Description"
        />
        <div className="mt-2 flex justify-end gap-4 text-sm">
          <button onClick={(e) => toggle()} className="btn-ghost btn-xs btn">
            Cancel
          </button>
          <button
            type="submit"
            disabled={taskInput === ""}
            className="btn-primary btn-xs btn"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddTodo;
