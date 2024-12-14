"use client";
import React, { FormEvent, useState } from "react";
import AddToDo from "./AddToDo";
import { redirect } from "next/navigation";

const New = () => {
  const [title, setTitle] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErr("");
    const res = await AddToDo(title);
    if (res.message) {
      setErr(res.message);
    }
  };
  const handleCancel = async () => {
    redirect("/");
  };

  return (
    <main className="container mx-auto p-5 flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-96 shadow-xl -translate-y-10">
        <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="text-2xl my-5 text-center font-bold">
            Add a new to-do
          </h1>
          <input
            type="text"
            placeholder="To-do title..."
            className="input input-bordered w-full max-w-xs"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => handleCancel()} className="btn">
              Cancel
            </button>
            <input type="submit" className="btn btn-primary" />
          </div>
          <p className="text-red-500 text-center">{err}</p>
        </form>
      </div>
    </main>
  );
};

export default New;
