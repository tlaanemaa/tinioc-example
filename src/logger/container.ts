import { Container } from "tinioc";
import { ILogger, LOGGER } from "./bindings";
import { logger } from "./logger";

export const container = new Container();
container.bind<ILogger>(LOGGER, logger);
