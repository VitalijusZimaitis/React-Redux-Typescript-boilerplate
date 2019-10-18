export interface IModel<T = any> {
  readonly isFetching?: boolean;
  readonly data: T;
  readonly err?: boolean;
  readonly message?: string;
}
