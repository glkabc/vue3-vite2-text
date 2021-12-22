import { rest } from "msw";

const homeMocks = [
  rest.post("/getList", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        data: {
          name: "dd",
        },
      })
    );
  }),
  rest.get("/get", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];

export default homeMocks;
