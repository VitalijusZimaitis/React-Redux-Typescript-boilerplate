import React from 'react';

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props: any) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  private static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  public componentDidCatch(): void {}

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>Something went wrong</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
