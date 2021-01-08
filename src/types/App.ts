export interface IApp {
  loading: boolean;
  loaded: boolean;
  error: boolean | [];
}

export interface BaseAppState<TMeta> {
  meta?: TMeta;
}
