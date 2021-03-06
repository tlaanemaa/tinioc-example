/*
  This is our container file.
  Here we initialize the container and register all of our components to it.
  In this example we're using a single global container, but you can also
  use local containers, per submodule for example. The container can be extended with
  other containers essentially allowing you to inherit from them.
*/

import { Container } from "tinioc";
import * as bindings from "./bindings";
import { loggerClient } from "./clients/logger";
import { employeesClient } from "./clients/employees/class-based";
import { numbersDB } from "./database/numbersDB";
import { employeesService } from "./services/employees";
import { randomInteger } from "./services/randomInteger";

export const container = new Container();

container.register<bindings.ILoggerClient>(bindings.LOGGER_CLIENT, loggerClient);
container.register<bindings.INumbersDB>(bindings.NUMBERS_DB, numbersDB);
container.register<bindings.IEmployeesClient>(
  bindings.EMPLOYEES_CLIENT,
  employeesClient
);
container.register<bindings.IEmployeesService>(
  bindings.EMPLOYEES_SERVICE,
  employeesService
);
container.register<bindings.IRandomInteger>(bindings.RANDOM_INTEGER, randomInteger);
