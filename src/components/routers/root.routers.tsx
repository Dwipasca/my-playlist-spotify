import React, { lazy, LazyExoticComponent } from "react";

export type RoutersState = {
  path: string;
  exact: boolean;
  component: LazyExoticComponent<React.FC>;
};

export const Routers: RoutersState[] = [
  {
    path: "/create-playlist",
    exact: true,
    component: lazy(() => import("pages/createPlaylist")),
  },
];
