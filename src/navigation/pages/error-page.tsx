import React from 'react';
import { useRouteError } from 'react-router-dom';
import '../../styles/error.styles.scss';

interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

const ErrorPage: React.FC = React.memo(() => {
  const error = useRouteError() as RouteError;

  return (
    <div className="error-page">
      <h1 className="error-page__title">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
});

export default ErrorPage;
