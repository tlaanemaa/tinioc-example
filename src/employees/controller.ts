import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { IEmployeesService, EMPLOYEES_SERVICE } from "./bindings";
import { IRequestContext, REQUEST_CONTEXT } from "../context/bindings";
import { employeesContainer } from "./container";
import { ILogger, LOGGER } from "../logger/bindings";

export const employeesRouter = Router();

employeesRouter.get("/oldest", async (req, res, next) => {
  const ctx = { correlationId: req.header("correlation-id") ?? uuidv4() };
  const container = employeesContainer
    .createChild()
    .bind<IRequestContext>(REQUEST_CONTEXT, () => ctx);

  try {
    const result = await container
      .get<IEmployeesService>(EMPLOYEES_SERVICE)
      .getOldest();

    res.json(result);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Something broke";
    const logger = container.get<ILogger>(LOGGER);
    logger.error(message);
    res.status(500).json({ error: "Something broke :(" });
  }

  next();
});

employeesRouter.get("/youngest", async (req, res, next) => {
  const ctx = { correlationId: req.header("correlation-id") ?? uuidv4() };
  const container = employeesContainer
    .createChild()
    .bind<IRequestContext>(REQUEST_CONTEXT, () => ctx);

  try {
    const result = await container
      .get<IEmployeesService>(EMPLOYEES_SERVICE)
      .getYoungest();

    res.json(result);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Something broke";
    const logger = container.get<ILogger>(LOGGER);
    logger.error(message);
    res.status(500).json({ error: "Something broke :(" });
  }

  next();
});
