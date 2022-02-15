import React, { memo, Suspense } from 'react';

export const withSuspense = <P, >(LazyComponent: React.ComponentType<P>) => {
  const WrappedWithSuspense = memo((props) => (
    <Suspense fallback="Loading...">
      <LazyComponent {...(props as P)} />
    </Suspense>
  ));
  WrappedWithSuspense.displayName = 'WrappedWithSuspense';
  return WrappedWithSuspense as React.FC<P>;
};
