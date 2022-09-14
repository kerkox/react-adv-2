import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
  children?: Route[]
}

// const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/ "../01-lazyload/pages/LazyPage1"));
// const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/ "../01-lazyload/pages/LazyPage2"));
// const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/ "../01-lazyload/pages/LazyPage3"));
const LazyLayout = lazy(() => import(/* webpackChunkName: "Lazyalyout"*/ "../01-lazyload/layout/LazyLayout"));


export const routes: Route[] = [
  {
    path: '/lazyload',
    Component: LazyLayout,
    name: 'LazyLoading Nested'
  },
  {
    path: '/no-lazy',
    Component: NoLazy,
    name: 'No Lazy Loading'
  }
  // {
  //   path: '/lazy2',
  //   Component: LazyPage2,
  //   name: 'LazyPage-2'
  // },
  // {
  //   path: '/lazy3',
  //   Component: LazyPage3,
  //   name: 'LazyPage-3'
  // },
]