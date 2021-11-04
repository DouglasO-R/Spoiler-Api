import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

// 
import { router } from "./routes";
import log from "./log";

// 
global.port = process.env.PORT || 80;
global.logger = log;

// 
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api",router);


export { app };