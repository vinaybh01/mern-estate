import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Private() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? (
    <Navigate to={"/profile"} />
  ) : (
    <Navigate to={"/signin"} />
  );
}

export default Private;
