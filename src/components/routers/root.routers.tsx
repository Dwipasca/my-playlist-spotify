import React, { lazy, LazyExoticComponent } from "react";

export type typeRouters = {
  path: string;
  exact: boolean;
  component: LazyExoticComponent<React.FC>;
};

export const Routers: typeRouters[] = [
  {
    path: "/create-playlist",
    exact: true,
    component: lazy(() => import("pages/createPlaylist")),
  },
];
