import fetch from "node-fetch";
import { declareInjectable } from "tinioc";
import { IEmployeesClient } from "./bindings";
import { IEmployee } from "./types";
import { IRequestContext, REQUEST_CONTEXT } from "../context";
import { INumbersDB, NUMBERS_DB } from "../database";

export const employeesClient = declareInjectable(
  ({ inject }): IEmployeesClient => ({
    getAll: async () => {
      const { correlationId } = inject<IRequestContext>(REQUEST_CONTEXT);
      const numbersDB = inject<INumbersDB>(NUMBERS_DB);

      // Count how many requests we've done
      const requestsDone = (numbersDB.getById("requests_done") ?? 0) + 1;
      numbersDB.setById("requests_done", requestsDone);
      console.log(" > Requests done:", requestsDone);

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
  })
);
