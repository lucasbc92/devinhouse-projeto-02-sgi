import { AuthProvider } from "./contexts/AuthContext";
import Routes from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
