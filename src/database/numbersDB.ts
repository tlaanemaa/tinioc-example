import { INumbersDB } from "../bindings";

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

/*
  Tinioc doesn't have any dependency scopes so you'll have to handle that yourself,
  this makes it much easier to understand and debug.
  Here's a simple way to create a singleton component that is initialized at boot.
*/
const dbInstance = new NumbersDB();
export const numbersDB = (): INumbersDB => dbInstance;
