/// <reference types="react-scripts" />
declare module "named-urls" {
  interface Routes {
    [path: string]: string | Routes;
  }
  interface ReverseParams {
    [path: string]: number | string;
  }

  function include(base: string, routes: Routes): Routes;
  function reverse(pattern: string, params?: ReverseParams): string;
  function reverseForce(pattern: string, params?: ReverseParams): string;
}
