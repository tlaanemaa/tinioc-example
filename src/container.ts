import { Container } from "tinioc";
import * as bindings from "./bindings";
import { loggerClient } from "./clients/logger";
import { employeesClient } from "./clients/employees";
import { numbersDB } from "./database/numbersDB";
import { employeesService } from "./services/employees";

export const container = new Container();

container.bind<bindings.ILoggerClient>(bindings.LOGGER_CLIENT, loggerClient);
container.bind<bindings.INumbersDB>(bindings.NUMBERS_DB, numbersDB);
container.bind<bindings.IEmployeesClient>(
  bindings.EMPLOYEES_CLIENT,
  employeesClient
);
container.bind<bindings.IEmployeesService>(
  bindings.EMPLOYEES_SERVICE,
  employeesService
);
