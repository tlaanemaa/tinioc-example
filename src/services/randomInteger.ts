import { randomInt } from "crypto";
import { Inject } from "tinioc";
import { IRandomInteger, ILoggerClient, LOGGER_CLIENT } from "../bindings";

/**
 * A simple component to showcase how async components work.
 * All this does is calculate a cryptographically secure number
 * and then return it.
 *
 * This also shows how you can essentially return whatever from the
 * factory. It doesn't have to be a component with methods,
 * it can even just be a plain number like here.
 *
 * Every time this component is injected, a new integer is calculated.
 */
export const randomInteger = (inject: Inject): IRandomInteger =>
  new Promise((resolve, reject) => {
    const logger = inject<ILoggerClient>(LOGGER_CLIENT);
    logger.info("Generating random integer between 0 and 9999889");

    randomInt(0, 9999889, (err, value) => {
      if (err) reject(err);
      resolve(value);
    });
  });
