import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { createUserService } from './auth.service';


// create user controller
export const registerUserController = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const password = user.password;
        const hashedPassword = await bcrypt.hashSync(password, 10);
        user.password = hashedPassword;

        const createUser = await createUserService(user);
        if (!createUser) return res.json({ message: "User not created" })
        return res.status(201).json({ message: createUser });

    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}