import { Container } from "tinioc";
import {
  IEmployeesClient,
  EMPLOYEES_CLIENT,
  IEmployeesService,
  EMPLOYEES_SERVICE,
} from "./bindings";
import { employeesClient } from "./employees.client";
import { employeesService } from "./employees.service";

export const container = new Container();
container.bind<IEmployeesClient>(EMPLOYEES_CLIENT, employeesClient);
container.bind<IEmployeesService>(EMPLOYEES_SERVICE, employeesService);
