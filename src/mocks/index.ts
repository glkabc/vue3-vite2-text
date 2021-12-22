import { setupWorker } from "msw";
import handlers from "./handlers";

const worker = setupWorker(...handlers);

// console.log('当前模式', import.meta.env.MODE)
if (import.meta.env.MODE === "development") {
  worker.start();
}

export { worker };
