import { Inject } from "tinioc";
import {
  IEmployeesService,
  IEmployeesClient,
  EMPLOYEES_CLIENT,
} from "../bindings";

/**
 * A simple service to demonstrate some business logic.
 *
 * Notice how the return type will give you helpful tips when
 * implementing the service and also let you know when you're not in line
 * with the interface.
 * This drastically reduces the cognitive load when working on the service
 * as you dont really need to think about anything other than this file and the interface.
 * Its entirely decoupled.
 */
export const employeesService = (inject: Inject): IEmployeesService => ({
  getYoungest: async () => {
    const client = inject<IEmployeesClient>(EMPLOYEES_CLIENT);
    const employees = await client.getAll();
    return employees.sort((a, b) => a.employee_age - b.employee_age)[0];
  },
});
