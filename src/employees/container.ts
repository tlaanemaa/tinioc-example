import { Container } from "tinioc";
import {
  IEmployeesClient,
  EMPLOYEES_CLIENT,
  IEmployeesService,
  EMPLOYEES_SERVICE,
} from "./bindings";
import { employeesClient } from "./employees.client";
import { employeesService } from "./employees.service";
import { dbContainer } from "../database";
import { loggerContainer } from "../logger";

export const employeesContainer = new Container().extend(
  dbContainer,
  loggerContainer
);

employeesContainer.bind<IEmployeesClient>(EMPLOYEES_CLIENT, employeesClient);
employeesContainer.bind<IEmployeesService>(EMPLOYEES_SERVICE, employeesService);
