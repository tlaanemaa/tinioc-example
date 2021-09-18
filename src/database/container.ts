import { Container } from "tinioc";
import { INumbersDB, NUMBERS_DB } from "./bindings";
import { numbersDB } from "./numbersDB";

export const container = new Container();
container.bind<INumbersDB>(NUMBERS_DB, numbersDB);
