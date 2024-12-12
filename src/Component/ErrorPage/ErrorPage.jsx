import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="not-found flex flex-col pt-32 items-center space-y-5"
      id="error-page"
    >
      <h1 className="text-5xl font-extrabold text-gray-500">404</h1>
      <h2 className="text-2xl">Oops! Page Not Found</h2>
      <p className="text-2xl">
        The page you`re looking for doesn`t exist or has been moved.
      </p>
      <Link to="/" className="back-home">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
