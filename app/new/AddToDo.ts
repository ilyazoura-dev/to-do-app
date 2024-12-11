"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const AddToDo = async (toDo: string) => {
  if (!toDo) {
    const err = new Error("Fill the input!");
    return err;
  }
  const newToDo = await prisma.toDo.create({ data: { title: toDo } });
  if (!newToDo) {
    const err = new Error("Something went wrong!");
    return err;
  }
  redirect("/");
};

export default AddToDo;
