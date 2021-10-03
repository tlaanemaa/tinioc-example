import { ID } from "tinioc";
import { employeesService } from "./employees";
import { EMPLOYEES_CLIENT } from "../bindings";

/**
 * A simple utility to create mocked inject functions.
 */
const createMockInject =
  (object: Record<ID, unknown>) =>
  <T>(id: ID) =>
    object[id] as T;

/*
  An example of how you'd test a tinioc component
*/
describe("employees service", () => {
  describe("getYoungest", () => {
    it("returns undefined if there's no employees", async () => {
      const mockInject = createMockInject({
        [EMPLOYEES_CLIENT]: {
          getAll: jest.fn().mockResolvedValue([]),
        },
      });

      const service = employeesService(mockInject);
      expect(await service.getYoungest()).toBe(undefined);
    });

    it("returns youngest one if there are employees", async () => {
      const mockInject = createMockInject({
        [EMPLOYEES_CLIENT]: {
          getAll: jest
            .fn()
            .mockResolvedValue([{ employee_age: 5 }, { employee_age: 6 }]),
        },
      });

      const service = employeesService(mockInject);
      expect(await service.getYoungest()).toStrictEqual({ employee_age: 5 });
    });
  });
});
