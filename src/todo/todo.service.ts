import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { TITodo, TodoTable, TSTodo } from "../drizzle/schema";

// create a todo service
export const createTodoService = async (todo: TITodo) => {
    const [inserted] = await db.insert(TodoTable).values(todo).returning();
    if (inserted) {
        return inserted
    }
    return null;
}

// get all todos 
export const getTodoService = async () => {
    const todos = await db.query.TodoTable.findMany();
    return todos;
}

// get todo by id
export const getTodoByIdService = async (id: number) => {
    const todo = await db.query.TodoTable.findFirst({
        where: eq(TodoTable.id, id)
    })
    return todo;
}

// update todo by id
export const updateTodoService = async (id: number, todo: TITodo) => {
    await db.update(TodoTable).set(todo).where(eq(TodoTable.id, id)).returning();
    return "Todo updated successfully";
}

// delete todo by id
export const deleteTodoService = async (id: number) => {
    await db.delete(TodoTable).where(eq(TodoTable.id, id)).returning();
    return "Todo deleted successfully";
}