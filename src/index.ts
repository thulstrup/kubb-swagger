import { swagger } from "@elysiajs/swagger";
import { Elysia, t } from "elysia";

const app = new Elysia()
  .use(swagger())
  .post(
    "/",
    ({ body }) => {
      const offset = body.offset || 0;
      return new Array(10).fill(null).map((_, index) => index + offset);
    },
    {
      body: t.Object({
        offset: t.Number(),
      }),
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
