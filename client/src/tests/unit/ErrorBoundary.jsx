import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <h2>Something went wrong.</h2> : this.props.children;
  }
}

export default ErrorBoundary;
