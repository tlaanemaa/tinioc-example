import { declareInjectable } from "tinioc";
import { INumbersDB } from "./bindings";

/**
 * A simple example implementation of a database
 */
class NumbersDB {
  private store = new Map<string, number>();

  public getById(id: string) {
    return this.store.get(id);
  }

  public setById(id: string, value: number) {
    return this.store.set(id, value);
  }
}

/**
 * This is a simple way to create a singleton
 */
let dbInstance: NumbersDB;
export const numbersDB = declareInjectable((): INumbersDB => {
  if (!dbInstance) dbInstance = new NumbersDB();
  return dbInstance;
});
