import { inferProcedureOutput } from "@trpc/server";
import { useSession } from "next-auth/react";
import { AppRouter } from "~/server/api/root";
import { api } from "~/utils/api";
import Todo from "./Todo";

export type TodoType = inferProcedureOutput<
  AppRouter["todo"]["getall"]
>[number];

type TodoListProps = {
  todos: TodoType[];
};

const TodoList = ({ todos }: TodoListProps) => {
  const { data: sessionData } = useSession();

  return (
    <ul>
      {todos?.map((todo) => (
        <Todo todo={todo} />
      ))}
    </ul>
  );
};
export default TodoList;
