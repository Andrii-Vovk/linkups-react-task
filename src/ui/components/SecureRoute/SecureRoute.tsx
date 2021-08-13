import { Redirect, Route } from "react-router-dom";

import { useAppSelector } from "../../../core/store/hooks";

export interface SecureRouteData {
  path: string;
  fallback: string;
  children: React.ReactNode;
  authReqiured?: boolean;
}

const SecureRoute: React.FC<SecureRouteData> = ({
  path,
  fallback,
  children,
  authReqiured
}) => {
  const token = useAppSelector((state) => state.auth.authToken);

  return (
    <>
      {authReqiured && <Route path={path}>{token ? children : <Redirect to={fallback} />}</Route>}
      {!authReqiured && <Route path={path}>{!token ? children : <Redirect to={fallback} />}</Route>}
    </>
  );
};

export default SecureRoute;
