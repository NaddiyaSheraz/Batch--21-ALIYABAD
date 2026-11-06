import { createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const userName = "Ali";

  return (
    <UserContext.Provider value={userName}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;