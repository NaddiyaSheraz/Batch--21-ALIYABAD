import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const userName = useContext(UserContext);

  return <h1>Profile: {userName}</h1>;
}

export default Profile;