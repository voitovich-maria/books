import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isAuth: boolean;
  redirectPath?: string;
}

export const PrivateRoute = ({ isAuth, redirectPath = '/signin' }: Props) => {
  return isAuth ? <Outlet /> : <Navigate to={redirectPath} replace />;
};
