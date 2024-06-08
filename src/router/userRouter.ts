import { UserController } from '../controller/UserController';

export const userRoutes = [
  {
    method: "get",
    route: "/",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/:id",
    controller: UserController,
    action: "remove",
  },
];