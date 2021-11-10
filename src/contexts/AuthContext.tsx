import { createContext, ReactNode, useState } from "react";

interface AuthContextData {
  signed: boolean;
  user: string;
  loginUser: (user: string) => void;
  logoff: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState("");

  function loginUser(user: string) {
    setSigned(true);
    setUser(user);
  }
  function logoff() {
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, user, loginUser, logoff }}>
      {children}
    </AuthContext.Provider>
  );
};
