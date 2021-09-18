import { Container } from "tinioc";
import { INumbersDB, NUMBERS_DB } from "./declarations";
import database from "./database";

export const container = new Container();

container.bind<INumbersDB>(NUMBERS_DB, database);
