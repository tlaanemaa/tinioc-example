import fetch from "node-fetch";
import { Inject } from "tinioc";
import {
  IEmployeesClient,
  IRequestContext,
  REQUEST_CONTEXT,
  INumbersDB,
  NUMBERS_DB,
  ILoggerClient,
  LOGGER_CLIENT,
  IRandomInteger,
  RANDOM_INTEGER,
} from "../../bindings";
import { IEmployee } from "../../types";

/**
 * An example client, implemented as a class.
 *
 * We're taking the inject function in as a constructor argument and
 * then we can use it anywhere in the class to either inject at class
 * initialization, into class properties, or inside our methods.
 *
 * It is advised to inject close usage as this reduces circular
 * dependency issues and improves performance.
 */
class EmployeesClient implements IEmployeesClient {
  /*
    We can inject into properties like this, using the provided inject function.
  */
  private readonly logger = this.inject<ILoggerClient>(LOGGER_CLIENT);
  private readonly numbersDB = this.inject<INumbersDB>(NUMBERS_DB);

  constructor(private readonly inject: Inject) {}

  async getAll() {
    /*
      We can also inject right in the method, in a more of a lazy-injection manner.
      The randomInteger is here to showcase injecting async components.
    */
    const { correlationId } = this.inject<IRequestContext>(REQUEST_CONTEXT);
    const randomInteger = await this.inject<IRandomInteger>(RANDOM_INTEGER);

    const requestsDone = (this.numbersDB.getById("requests_done") ?? 0) + 1;
    this.numbersDB.setById("requests_done", requestsDone);
    this.logger.info("Sending request (class-based)", {
      requestsDone,
      randomInteger,
    });

    const result = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "correlation-id": correlationId,
        },
      }
    );

    /*
      Some response validation should be done here
      to ensure the response actually matches our interface.
    */
    const data = await result.json();
    return data.data as IEmployee[];
  }
}

/*
 * We'll still have to export a factory, this is what tinioc expects,
 * but all we need to do in it is initialize the class.
 *
 * Also note how we can easily bind either the class or object literal based
 * implementation. This is what decoupling through the bindings file enables.
 */
export const employeesClient = (inject: Inject): IEmployeesClient =>
  new EmployeesClient(inject);
