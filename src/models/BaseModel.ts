import { IModel } from "../types/Model";

export class BaseModel {
  private state: IModel;

  constructor(state: IModel) {
    this.state = state;
  }

  public all() {
    return this.state.data;
  }
}
