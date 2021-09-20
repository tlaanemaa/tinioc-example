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
  getOldest(): Promise<IEmployee>;
}

export const EMPLOYEES_CLIENT = Symbol.for("employees_client");
export interface IEmployeesClient {
  getAll(): Promise<IEmployee[]>;
}
