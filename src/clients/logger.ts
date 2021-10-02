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

/**
 * An example logger client to showcase the most common use case for
 * request context injection.
 *
 * All we do here is clone the baseLogger defined above and give it our
 * correlationId for context.
 */
export const loggerClient = (inject: Inject): ILoggerClient => {
  const { correlationId } = inject<IRequestContext>(REQUEST_CONTEXT);
  return baseLogger.child({ correlationId });
};
