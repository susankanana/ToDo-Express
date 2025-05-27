import db from "../drizzle/db";
import { TIUser, UsersTable } from "../drizzle/schema";

export const createUserService = async (user: TIUser) => {
    await db.insert(UsersTable).values(user);
    return "User created successfully";
}