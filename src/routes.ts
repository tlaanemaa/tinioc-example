import { Router } from "express";
import { employeesRouter } from "./controllers/employees";

const router = Router();
export default router;

router.use("/employees", employeesRouter);
