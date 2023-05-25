import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

type TComponent = {
  onlyUnAuth?: boolean;
  component: JSX.Element;
};

const Protected = ({
  onlyUnAuth = false,
  component,
}: TComponent): JSX.Element | null => {
  //@ts-ignore
  const isAuthChecked = useSelector((state) => state.user.isAuthChecked);
  //@ts-ignore
  const user = useSelector((state) => state.user.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return null;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }: Pick<TComponent, "component">) => (
  <Protected onlyUnAuth={true} component={component} />
);
