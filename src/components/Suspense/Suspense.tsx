import { Suspense, ComponentType, ComponentProps } from "react";

const withSuspense = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: ComponentProps<any>) => {
    return (
      <Suspense fallback={<h1>Loading</h1>}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
};

export default withSuspense;
