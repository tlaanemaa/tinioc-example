import { Logger as WinstonLogger } from "winston";

export const LOGGER = Symbol.for("logger");
export type ILogger = WinstonLogger;
