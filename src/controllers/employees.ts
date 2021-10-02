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

employeesRouter.get("/youngest", async (req, res, next) => {
  /*
    We build the request context object and create a local container.
    This gives us a container to use both in our happy path and also in
    our error handling code.
    The logger that we use in the catch block below also depends on the
    REQUEST_CONTEXT being there.
  */
  const ctx = { correlationId: req.header("correlation-id") ?? uuidv4() };
  const localContainer = container
    .createChild()
    .bind<IRequestContext>(REQUEST_CONTEXT, () => ctx);

  try {
    /*
      Here we use container.get to get a component from outside of the container.
      The container.get method gives us an entry point into the container.
      When we're operating from within a component, we use the inject function, that is passed
      to the component's factory, instead.
    */
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
