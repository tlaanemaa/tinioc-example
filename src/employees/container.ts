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

const local = new Container();
local.bind<IEmployeesClient>(EMPLOYEES_CLIENT, employeesClient);
local.bind<IEmployeesService>(EMPLOYEES_SERVICE, employeesService);

/**
 * We're merging out container with the database container to give us access to its contents.
 * This of this like importing another module into ours.
 */
export const container = Container.merge(local, databaseContainer);
