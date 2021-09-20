import { Inject } from "tinioc";
import * as winston from "winston";
import { ILoggerClient, IRequestContext, REQUEST_CONTEXT } from "../bindings";

const baseLogger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "tinioc-example" },
  transports: [
    new winston.transports.Console({
      format: winston.format.prettyPrint(),
    }),
  ],
});

export const loggerClient = (inject: Inject): ILoggerClient => {
  const { correlationId } = inject<IRequestContext>(REQUEST_CONTEXT);
  return baseLogger.child({ correlationId });
};
