import { Router } from "express";
import { employeesRouter } from "./employees";

const router = Router();
export default router;

router.use("/employees", employeesRouter);
