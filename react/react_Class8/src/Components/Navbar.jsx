import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {
  const userName = useContext(UserContext);

  return <h1>Welcome {userName}</h1>;
}

export default Navbar;