import { userRoutes } from "./router/userRouter";
import { DiasesRoutes } from "./router/diasesRouter";

export const Routes = [
  {
   route: "/diases",
   router: DiasesRoutes
    },
  { route: "/users",
    router: userRoutes,

  },

];
