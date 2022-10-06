import express from "express";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/task.routes.js";

export const app =  express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRoutes);
app.use('/api/task',taskRoutes);
