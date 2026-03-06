import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error: any = useRouteError();

  console.log(error.statusText);
  console.log(error.status);

  return <div>{isError(error) && <p>{error.statusText}</p>}</div>;
}

function isError(error: any): error is { statusText: string } {
  return 'statusText' in error;
}
