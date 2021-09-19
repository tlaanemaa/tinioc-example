import { Inject } from "tinioc";
import * as winston from "winston";
import { IRequestContext, REQUEST_CONTEXT } from "../context";
import { ILogger } from "./bindings";

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

export const logger = (inject: Inject): ILogger => {
  const { correlationId } = inject<IRequestContext>(REQUEST_CONTEXT);
  return baseLogger.child({ correlationId });
};
