"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const ItemDelete = async (id: number) => {
  const delToDo = await prisma.toDo.delete({ where: { id: id } });
  if (!delToDo) {
    return null;
  }
  redirect("/");
};

export default ItemDelete;
