import { Container } from "tinioc";
import {
  INumbersDB,
  NUMBERS_DB,
  IEmployeesClient,
  EMPLOYEES_CLIENT,
  IEmployeesService,
  EMPLOYEES_SERVICE,
} from "./declarations";
import database from "./database";
import { employeesClient } from "./employees/employees.client";
import { employeesService } from "./employees/employees.service";

export const container = new Container();

container.bind<INumbersDB>(NUMBERS_DB, database);
container.bind<IEmployeesClient>(EMPLOYEES_CLIENT, employeesClient);
container.bind<IEmployeesService>(EMPLOYEES_SERVICE, employeesService);
