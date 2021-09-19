import { Inject } from "tinioc";
import {
  IEmployeesService,
  IEmployeesClient,
  EMPLOYEES_CLIENT,
} from "./bindings";

export const employeesService = (inject: Inject): IEmployeesService => ({
  getYoungest: async () => {
    const client = inject<IEmployeesClient>(EMPLOYEES_CLIENT);
    const employees = await client.getAll();
    return employees.sort((a, b) => a.employee_age - b.employee_age)[0];
  },

  getOldest: async () => {
    const client = inject<IEmployeesClient>(EMPLOYEES_CLIENT);
    const employees = await client.getAll();
    return employees.sort((a, b) => b.employee_age - a.employee_age)[0];
  },
});
