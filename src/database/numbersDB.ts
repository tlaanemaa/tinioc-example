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
const dbInstance = new NumbersDB();
export const numbersDB = (): INumbersDB => dbInstance;
