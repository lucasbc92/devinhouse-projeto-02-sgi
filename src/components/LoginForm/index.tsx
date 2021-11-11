import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
//import { Link } from "react-router-dom";

import "./styles.css";

export const LoginForm = () => {
  const { loginUser } = useContext(AuthContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (user.length === 0) {
      alert("Preencha seu nome de usuário.");
      return;
    }
    if (password.length === 0) {
      alert("Preencha sua senha.");
      return;
    }
    loginUser(user);
  };

  return (
    <>
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit} className="login-form-container">
        <input
          type="email"
          name="user"
          placeholder="Usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
        {/* <p>
          Not registered? <Link to="/account">Create an account</Link>
        </p> */}
      </form>
    </>
  );
};
