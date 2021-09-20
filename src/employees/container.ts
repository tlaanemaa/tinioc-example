import { Container } from "tinioc";
import {
  IEmployeesClient,
  EMPLOYEES_CLIENT,
  IEmployeesService,
  EMPLOYEES_SERVICE,
} from "./bindings";
import { employeesClient } from "./client";
import { employeesService } from "./service";
import { dbContainer } from "../database/container";
import { loggerContainer } from "../logger/container";

export const employeesContainer = new Container().extend(
  dbContainer,
  loggerContainer
);

employeesContainer.bind<IEmployeesClient>(EMPLOYEES_CLIENT, employeesClient);
employeesContainer.bind<IEmployeesService>(EMPLOYEES_SERVICE, employeesService);
