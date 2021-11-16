import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import SignRoutes from "./SignRoutes";
import OtherRoutes from "./OtherRoutes";

const Routes: React.FC = () => {
  //   const isDev =
  //     window.location.hostname === "localhost" ||
  //     window.location.hostname === "127.0.0.1";
  const isDev = false;

  const { signed } = useContext(AuthContext);

  return signed || isDev ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;
