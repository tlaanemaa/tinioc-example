/*
    This is where our dependency declarations are kept.

    Keeping IDs and Interfaces in a separate file like this
    allows us to really decouple our components from each-other.
    Components will depend on these interfaces, not the concrete
    implementations.

    Also, connecting the dependency ID with it's interface will give us
    type safety. As long as the same pair is used together, we'll know that
    we will receive a dependency that fulfills the interface.
*/

export const NUMBERS_DB = Symbol.for("numbers_db");
export interface INumbersDB {
  getById(id: string): number | undefined;
  setById(id: string, value: number): void;
}
