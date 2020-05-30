import { RouteProps } from "react-router-dom";
import { lazy } from "react";

export interface Route {
  path: string;
  props: RouteProps;
}

const routes: Route[] = [
  {
    path: "/",
    props: {
      component: lazy(() => import("../pages/Home")),
      exact: true,
    },
  },
  {
    path: "/about",
    props: {
      component: lazy(() => import("../pages/About")),
      exact: true,
    },
  },
];

export default routes;
