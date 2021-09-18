import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  IRequestContext,
  REQUEST_CONTEXT,
  IEmployeesService,
  EMPLOYEES_SERVICE,
} from "../declarations";
import { container } from "../bindings";

const router = Router();
export default router;

router.get("/oldest", async (req, res, next) => {
  const ctx = { correlationId: req.header("correlation-id") ?? uuidv4() };
  const result = await container
    .createChild()
    .bind<IRequestContext>(REQUEST_CONTEXT, () => ctx)
    .get<IEmployeesService>(EMPLOYEES_SERVICE)
    .getOldest();

  res.json(result);
});
