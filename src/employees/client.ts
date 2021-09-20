import fetch from "node-fetch";
import { Inject } from "tinioc";
import { IEmployeesClient } from "./bindings";
import { IEmployee } from "./types";
import { IRequestContext, REQUEST_CONTEXT } from "../context/bindings";
import { INumbersDB, NUMBERS_DB } from "../database/bindings";
import { ILogger, LOGGER } from "../logger/bindings";

export const employeesClient = (inject: Inject): IEmployeesClient => ({
  getAll: async () => {
    const { correlationId } = inject<IRequestContext>(REQUEST_CONTEXT);
    const numbersDB = inject<INumbersDB>(NUMBERS_DB);
    const logger = inject<ILogger>(LOGGER);

    // Count how many requests we've done
    const requestsDone = (numbersDB.getById("requests_done") ?? 0) + 1;
    numbersDB.setById("requests_done", requestsDone);
    logger.info("Sending request", { requestsDone });

    const result = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "correlation-id": correlationId,
        },
      }
    );

    // TODO: Some response validation should be added here
    const data = (await result.json()) as any;
    return data.data as IEmployee[];
  },
});
