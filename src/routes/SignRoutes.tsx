import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "../pages/Login";

const SignRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
    </Switch>
  </BrowserRouter>
);

export default SignRoutes;
