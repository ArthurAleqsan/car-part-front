import { Component, ErrorInfo, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
  errorMessage: string;
  errorInfo: string;
}
const Item = <div>We’re sorry - something has gone wrong. Please try again or contact the Support.</div>;
class ErrorBoundaryComponent extends Component<IProps, IState> {
  public state: IState = {
    hasError: false,
    errorMessage: '',
    errorInfo: '',
  };

  public static getDerivedStateFromError(error: Error): IState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: `Uncaught error: ${error?.stack?.toString()}`, errorInfo: '' };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): any {
    console.error('Uncaught error:', error, errorInfo);
    return this.setState({
      ...this.state,
      errorInfo: errorInfo.componentStack as string,
    });
  }

  public render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;
    const { errorMessage } = this.state;
    const { errorInfo } = this.state;

    if (hasError) {
      return (
        <div>
          <p>{Item}</p>
          <br />
          <p>{errorMessage}</p>
          <br />
          <p>{errorInfo}</p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundaryComponent;
