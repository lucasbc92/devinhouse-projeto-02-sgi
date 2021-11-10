import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { EnterpriseRegister } from "../pages/EnterpriseRegister";
import { EnterprisesMap } from "../pages/EnterprisesMap";
import { Logout } from "../pages/Logout";

const OtherRoutes = () => (
  <BrowserRouter>
    <NavBar
      links={[
        {
          to: "/",
          title: "Mapa",
        },
        {
          to: "/empresas",
          title: "Empresas",
        },
        {
          to: "/logout",
          title: "Logout",
        },
      ]}
    />
    <Switch>
      <Route path="/" component={EnterprisesMap} exact />
      <Route path="/empresas" component={EnterpriseRegister} exact />
      <Route path="/logout" component={Logout} exact />
    </Switch>
  </BrowserRouter>
);

export default OtherRoutes;
