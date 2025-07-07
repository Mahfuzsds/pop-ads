import { createRequestHandler } from "@remix-run/vercel";
import * as build from "./build/server/index.js"; // Adjust if needed

export default createRequestHandler({ build });
