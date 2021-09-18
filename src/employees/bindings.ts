import { IEmployee } from "./types";

export const EMPLOYEES_SERVICE = Symbol.for("employees_service");
export interface IEmployeesService {
  getYoungest(): Promise<IEmployee>;
  getOldest(): Promise<IEmployee>;
}

export const EMPLOYEES_CLIENT = Symbol.for("employees_client");
export interface IEmployeesClient {
  getAll(): Promise<IEmployee[]>;
}
