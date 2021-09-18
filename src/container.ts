import { Container } from "tinioc";
import {
  IEmployeesClient,
  EMPLOYEES_CLIENT,
  IEmployeesService,
  EMPLOYEES_SERVICE,
} from "./employees";
import { numbersDB, INumbersDB, NUMBERS_DB } from "./database";
import { employeesClient } from "./employees/employees.client";
import { employeesService } from "./employees/employees.service";

export const container = new Container();

container.bind<INumbersDB>(NUMBERS_DB, numbersDB);
container.bind<IEmployeesClient>(EMPLOYEES_CLIENT, employeesClient);
container.bind<IEmployeesService>(EMPLOYEES_SERVICE, employeesService);
