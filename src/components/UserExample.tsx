import React from "react";
import { RouteComponentProps } from "react-router";

interface MatchParams {
  id?: string;
}

export const UserExample: React.FC<RouteComponentProps<MatchParams>> = (
  props
): JSX.Element => {
  return <h1>User {props.match.params.id}</h1>;
};
