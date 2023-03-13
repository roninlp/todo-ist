import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import AddTodo from "~/components/AddTodo";
import TodoList from "~/components/TodoList";
import { useEffect, useState } from "react";

import { SlBubble, SlEqualizer, SlOptions, SlPlus } from "react-icons/sl";
import { useSession } from "next-auth/react";
import { inferProcedureOutput } from "@trpc/server";
import { AppRouter } from "~/server/api/root";

const Home: NextPage = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  function toggleShowAddTask() {
    setShowAddTask(!showAddTask);
  }

  const { data: sessionData } = useSession();

  const { data: todos, refetch: refetchTodos } = api.todo.getall.useQuery(
    undefined,
    {
      enabled: sessionData?.user !== undefined,
    }
  );
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  useEffect(() => {
    refetchTodos();
  }, [showAddTask]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-inter">
        <div className="ml-60 flex flex-col">
          <header className="sticky top-0 block px-14 pt-9">
            <div className="mx-auto my-0 flex w-full max-w-3xl justify-between">
              <div>
                <h2>Inbox</h2>
              </div>
              <div className="flex items-center gap-4 text-gray-500">
                <div className="flex items-center gap-1">
                  <SlBubble className="text-lg" />
                  <span>Comments</span>
                </div>
                <div className="flex items-center gap-1">
                  <SlEqualizer className="text-lg" />
                  <span>View</span>
                </div>
                <div className="flex items-center gap-1">
                  <SlOptions className="text-lg" />
                </div>
              </div>
            </div>
          </header>
          <div className="w-full px-14 pt-4 ">
            <div className="mx-auto my-0 flex w-full max-w-3xl items-center">
              {todos && <TodoList todos={todos} />}
            </div>
          </div>

          <div className="w-full px-14 pt-4 ">
            <div className="mx-auto my-0 flex w-full max-w-3xl items-center">
              {showAddTask ? (
                <AddTodo toggle={toggleShowAddTask} />
              ) : (
                <div
                  className="group flex w-full items-center gap-2 hover:cursor-pointer"
                  onClick={(e) => setShowAddTask(!showAddTask)}
                >
                  <SlPlus className="rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white" />
                  <span className="text-sm text-gray-500 group-hover:text-orange-500">
                    Add task
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
