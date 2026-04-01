import { useSelector } from "react-redux";
import { Outlet, navigate } from "react-router-dom";

export default function PrivateRoute() {
    const { currentUser } = useSelector((state) => state.auth);
  return currentUser ? <Outlet /> : navigate('/sign-in');
}
