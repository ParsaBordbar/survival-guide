import { ComponentType } from "react";
import { JSX } from "react/jsx-dev-runtime";
import Survival from "../pages/Survival";

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
  }
  
export const routes: Route[] = [
    { path: '/guide', Component: Survival },
];