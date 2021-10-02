/*
  This is our central bindings file.
  Here we'll be keeping all of our id <-> type pairs.
  Having them in a cental place like this allows us to decouple the components from each other
  while also providing a sort of a contract for our components. The contract is the interface
  in this file and as long as it's unchanged, you can do whatever you want with your component.
  When you do have to change it tho, it will be obvious and you'll be able to much more easily spot
  integration issues in other components.
*/

import { Logger as WinstonLogger } from "winston";
import { IEmployee } from "./types";

export const REQUEST_CONTEXT = Symbol.for("request_context");
export interface IRequestContext {
  correlationId: string;
}

export const LOGGER_CLIENT = Symbol.for("logger_client");
export type ILoggerClient = WinstonLogger;

export const NUMBERS_DB = Symbol.for("numbers_db");
export interface INumbersDB {
  getById(id: string): number | undefined;
  setById(id: string, value: number): void;
}

export const EMPLOYEES_SERVICE = Symbol.for("employees_service");
export interface IEmployeesService {
  getYoungest(): Promise<IEmployee>;
}

export const EMPLOYEES_CLIENT = Symbol.for("employees_client");
export interface IEmployeesClient {
  getAll(): Promise<IEmployee[]>;
}
