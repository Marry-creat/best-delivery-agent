import type { Context, Config } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  request.headers.set("X-Your-Custom-Header", "Your custom header value");
};

export const config: Config = {
  path: "/*",
};