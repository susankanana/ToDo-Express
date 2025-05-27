import {
    createTodoController, getTodoController, getTodoByIdController, updateTodoController, deleteTodoController
} from "./todo.controller";

import { Express } from 'express';

const todo = (app: Express) => {
    // create todo route
    app.route('/todo').post(
        async (req, res, next) => {
            try {
                await createTodoController(req, res);
            } catch (error: any) {
                next(error); // Passes the error to the next middleware
            }
        }
    )

    // get all todos route
    app.route('/todo').get(
        async (req, res, next) => {
            try {
                await getTodoController(req, res);
            } catch (error: any) {
                next(error); // Passes the error to the next middleware
            }
        }
    )

    // get todo by id route
    app.route('/todo/:id').get(
        async (req, res, next) => {
            try {
                await getTodoByIdController(req, res);
            } catch (error: any) {
                next(error); // Passes the error to the next middleware
            }
        }
    )

    // update todo by id route
    app.route('/todo/:id').put(
        async (req, res, next) => {
            try {
                await updateTodoController(req, res);
            } catch (error: any) {
                next(error); // Passes the error to the next middleware
            }
        }
    )

    // delete todo by id route
    app.route('/todo/:id').delete(
        async (req, res, next) => {
            try {
                await deleteTodoController(req, res);
            } catch (error: any) {
                next(error); // Passes the error to the next middleware
            }
        }
    )
}

export default todo;