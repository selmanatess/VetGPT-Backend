import {DiasesController } from '../controller/DiasesController';

export const DiasesRoutes = [
  {
    method: "get",
    route: "/",
    controller: DiasesController,
    action: "all",
  },
  {
    method: "get",
    route: "/:id",
    controller: DiasesController,
    action: "one",
  },
  {
    method: "post",
    route: "/",
    controller: DiasesController,
    action: "save",
  },
  {
    method: "delete",
    route: "/:id",
    controller: DiasesController,
    action: "remove",
  },
];