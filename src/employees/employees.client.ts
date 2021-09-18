import fetch from "node-fetch";
import { declareDependency } from "tinioc";
import {
  IEmployeesClient,
  IRequestContext,
  REQUEST_CONTEXT,
} from "../declarations";
import { IEmployee } from "./types";

export const employeesClient = declareDependency(
  ({ get }): IEmployeesClient => ({
    getAll: async () => {
      const { correlationId } = get<IRequestContext>(REQUEST_CONTEXT);
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
