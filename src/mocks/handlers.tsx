import { rest } from "msw";
import defunktResponse from "./defunktResponse.json";
import hakeemResponse from "./hakeemResponse.json";

export const handlers = [
  // Handles a POST /login request
  rest.get("https://api.github.com/users/defunkt", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.json(defunktResponse)
    );
  }),

  rest.get("https://api.github.com/users/Hakeem-star", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.json(hakeemResponse)
    );
  }),
];
