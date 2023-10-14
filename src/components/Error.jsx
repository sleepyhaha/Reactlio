import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="errorPage">
      <h1>Oops sorry!</h1>
      <p className="mt-10">Looks like we've hit an error</p>
      <img src="/assets/oops.gif" alt="Error gif" className="mt-10" />
      <Link to="/">
        <p className="mt-10">Click here to return home</p>
      </Link>
    </div>
  );
}
