import prisma from "@/lib/prisma";
import Link from "next/link";
import Item from "./components/Item";

export default async function Home() {
  const toDos = await prisma.toDo.findMany();
  return (
    <main className="container mx-auto p-5 space-y-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-5 text-4xl font-bold">
          <h1 className="">To-do List </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
        </div>
        <div>
          <Link className="btn btn-primary btn-square" href="/new">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#efefef"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3h18v18H3zM12 8v8m-4-4h8" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="space-y-5">
        {toDos.length ? (
          toDos.map((t, i) => <Item key={i} title={t.title} id={t.id} />)
        ) : (
          <p className="text-center m-24">To-do list is empty.</p>
        )}
      </div>
    </main>
  );
}
