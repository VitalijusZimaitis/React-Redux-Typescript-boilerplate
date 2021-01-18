import React, { Suspense } from "react";

const withSuspense = (WrappedComponent: any) => {
  return (props: any) => {
    return (
      <Suspense fallback={<h1>Loading</h1>}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
};

export default withSuspense;
