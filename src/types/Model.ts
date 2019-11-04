export interface IModel<T = any> {
  readonly data?: T;
  readonly err?: boolean;
  readonly message?: string;
}
