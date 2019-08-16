import * as React from "react";

interface ILoadingProps {
  text?: string;
}

const Loading: React.FC<ILoadingProps> = (props): JSX.Element => {
  const { text } = props;

  return <>{text ? <h1>{text}</h1> : <h1>Loading</h1>}</>;
};

export default Loading;
