import { Container } from "tinioc";
import { INumbersDB, NUMBERS_DB } from "./bindings";
import { numbersDB } from "./numbersDB";

export const dbContainer = new Container();
dbContainer.bind<INumbersDB>(NUMBERS_DB, numbersDB);
