import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="errorPage">
      <h1>You've run into an error</h1>
    </div>
  );
}
