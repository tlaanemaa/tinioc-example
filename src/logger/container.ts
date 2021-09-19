import { Container } from "tinioc";
import { ILogger, LOGGER } from "./bindings";
import { logger } from "./logger";

export const loggerContainer = new Container();
loggerContainer.bind<ILogger>(LOGGER, logger);
