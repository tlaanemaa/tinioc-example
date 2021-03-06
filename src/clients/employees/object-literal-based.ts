import fetch from "node-fetch";
import { Inject } from "tinioc";
import {
  IEmployeesClient,
  IRequestContext,
  REQUEST_CONTEXT,
  INumbersDB,
  NUMBERS_DB,
  ILoggerClient,
  LOGGER_CLIENT,
  IRandomInteger,
  RANDOM_INTEGER,
} from "../../bindings";
import { IEmployee } from "../../types";

/**
 * An example client, implemented as an object literal.
 *
 * We're immediately returning an object with methods here but you could also
 * do some logic first and return your component in the end.
 *
 * It is advised to inject close usage as this reduces circular
 * dependency issues and improves performance.
 */
export const employeesClient = (inject: Inject): IEmployeesClient => ({
  getAll: async () => {
    /*
      This is where we'll inject all of our dependencies
      The randomInteger is here to showcase injecting async components
    */
    const { correlationId } = inject<IRequestContext>(REQUEST_CONTEXT);
    const numbersDB = inject<INumbersDB>(NUMBERS_DB);
    const logger = inject<ILoggerClient>(LOGGER_CLIENT);
    const randomInteger = await inject<IRandomInteger>(RANDOM_INTEGER);

    const requestsDone = (numbersDB.getById("requests_done") ?? 0) + 1;
    numbersDB.setById("requests_done", requestsDone);
    logger.info("Sending request (object-literal-based)", {
      requestsDone,
      randomInteger,
    });

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

    /*
      Some response validation should be done here
      to ensure the response actually matches our interface.
    */
    const data = await result.json();
    return data.data as IEmployee[];
  },
});
