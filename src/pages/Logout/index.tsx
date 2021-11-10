import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export const Logout = () => {
  const history = useHistory();
  const { logoff } = useContext(AuthContext);

  useEffect(() => {
    logoff();
    alert("Usuário deslogou do sistema.");
    history.push("/");
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};
