/*
  General express app route collection.
  Nothing too special here.
*/

import { Router } from "express";
import { employeesRouter } from "./controllers/employees";

const router = Router();
export default router;

router.use("/employees", employeesRouter);
