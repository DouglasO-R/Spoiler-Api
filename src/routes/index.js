import { Router } from "express";
import spoilerRoute from "./spoiler";
import errorHandler from "./../utils/errorHandler";

const router = Router();

router.use("/spoiler",spoilerRoute);
router.use(errorHandler);

export { router };
