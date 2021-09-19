import { Container } from "tinioc";
import {
  IEmployeesClient,
  EMPLOYEES_CLIENT,
  IEmployeesService,
  EMPLOYEES_SERVICE,
} from "./bindings";
import { employeesClient } from "./employees.client";
import { employeesService } from "./employees.service";
import { container as databaseContainer } from "../database";
import { container as loggerContainer } from "../logger";

export const container = new Container().extend(
  databaseContainer,
  loggerContainer
);

container.bind<IEmployeesClient>(EMPLOYEES_CLIENT, employeesClient);
container.bind<IEmployeesService>(EMPLOYEES_SERVICE, employeesService);
