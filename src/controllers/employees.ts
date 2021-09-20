import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  IRequestContext,
  REQUEST_CONTEXT,
  ILoggerClient,
  LOGGER_CLIENT,
  IEmployeesService,
  EMPLOYEES_SERVICE,
} from "../bindings";
import { container } from "../container";

export const employeesRouter = Router();

employeesRouter.get("/oldest", async (req, res, next) => {
  const ctx = { correlationId: req.header("correlation-id") ?? uuidv4() };
  const localContainer = container
    .createChild()
    .bind<IRequestContext>(REQUEST_CONTEXT, () => ctx);

  try {
    const result = await localContainer
      .get<IEmployeesService>(EMPLOYEES_SERVICE)
      .getOldest();

    res.json(result);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Something broke";
    const logger = localContainer.get<ILoggerClient>(LOGGER_CLIENT);
    logger.error(message);
    res.status(500).json({ error: "Something broke :(" });
  }

  next();
});

employeesRouter.get("/youngest", async (req, res, next) => {
  const ctx = { correlationId: req.header("correlation-id") ?? uuidv4() };
  const localContainer = container
    .createChild()
    .bind<IRequestContext>(REQUEST_CONTEXT, () => ctx);

  try {
    const result = await localContainer
      .get<IEmployeesService>(EMPLOYEES_SERVICE)
      .getYoungest();

    res.json(result);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Something broke";
    const logger = localContainer.get<ILoggerClient>(LOGGER_CLIENT);
    logger.error(message);
    res.status(500).json({ error: "Something broke :(" });
  }

  next();
});
