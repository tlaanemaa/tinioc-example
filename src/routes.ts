import { Router } from "express";
import employees from "./employees/employees.controller";

const router = Router();
export default router;

router.use("/employees", employees);
