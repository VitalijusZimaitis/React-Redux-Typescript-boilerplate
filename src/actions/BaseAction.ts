export class BaseAction {
  private requestName: string = "app";

  public getRequestName = (): string => {
    return this.requestName;
  };

  public setRequestName = (name: string) => {
    return (this.requestName = name);
  };
}
