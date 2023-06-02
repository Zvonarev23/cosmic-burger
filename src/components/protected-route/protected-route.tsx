import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../../hooks/useSelector";

type TComponent = {
  onlyUnAuth?: boolean;
  component: JSX.Element;
};

const Protected = ({
  onlyUnAuth = false,
  component,
}: TComponent): JSX.Element | null => {
  const isAuthChecked = useSelector((state) => state.user.isAuthChecked);
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
