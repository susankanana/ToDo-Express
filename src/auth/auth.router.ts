import { Express } from "express";
import { registerUserController } from "./auth.controller";

const user = (app: Express) => {
    // register user route
    app.route("/auth/register").post(
        async (req, res, next) => {
            try {
                await registerUserController(req, res);
            } catch (error: any) {
                next(error); //means that if an error occurs, it will be passed to the next middleware, which in this case is the error handler
            }
        }
    )
}

export default user;