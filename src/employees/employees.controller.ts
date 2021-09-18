import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { IEmployeesService, EMPLOYEES_SERVICE } from "./bindings";
import { IRequestContext, REQUEST_CONTEXT } from "../bindings";
import { container } from "../container";

export const employeesRouter = Router();

employeesRouter.get("/oldest", async (req, res, next) => {
  const ctx = { correlationId: req.header("correlation-id") ?? uuidv4() };
  const result = await container
    .createChild()
    .bind<IRequestContext>(REQUEST_CONTEXT, () => ctx)
    .get<IEmployeesService>(EMPLOYEES_SERVICE)
    .getOldest();

  res.json(result);
  next();
});
