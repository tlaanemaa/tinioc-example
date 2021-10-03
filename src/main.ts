/*
  General express app bootstrapping.
  Nothing too special here.
*/

import * as express from "express";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000;
const host = `http://localhost:${port}`;

app.use(routes);

app.listen(port, () =>
  console.log(
    [
      `Listening on ${host}`,
      `See ${host}/employees/youngest for an example route`,
    ].join("\n")
  )
);
