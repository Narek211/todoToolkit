import { createAction } from "@reduxjs/toolkit";
import { ADD, REMOVE } from "./types";

export const addTodo = createAction(ADD);
export const removeTodo = createAction(REMOVE);
