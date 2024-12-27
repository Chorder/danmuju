import { onRequest as __api_fetch_js_onRequest } from "/home/test/danmuju/functions/api/fetch.js"
import { onRequest as __api_post_js_onRequest } from "/home/test/danmuju/functions/api/post.js"

export const routes = [
    {
      routePath: "/api/fetch",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_fetch_js_onRequest],
    },
  {
      routePath: "/api/post",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_post_js_onRequest],
    },
  ]