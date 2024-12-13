"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const ItemEdit = async (id: number, newTitle: string) => {
  const editToDo = await prisma.toDo.update({
    where: { id: id },
    data: { title: newTitle },
  });
  if (!editToDo) {
    return null;
  }
  redirect("/");
};

export default ItemEdit;
