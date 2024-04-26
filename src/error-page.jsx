import { useRouteError } from "react-router-dom";

import React from "react";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h3>Oops!</h3>
      <p>Sorry, an expected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
