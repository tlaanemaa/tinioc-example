import { Router } from "express";
import { employeesRouter } from "./employees/controller";

const router = Router();
export default router;

router.use("/employees", employeesRouter);
