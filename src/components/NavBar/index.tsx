import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./styles.css";

interface NavBarLink {
  to: string;
  title: string;
}

interface NavBarProps {
  links: NavBarLink[];
}

export const NavBar: React.FC<NavBarProps> = ({ links }) => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar-container">
      <span>Olá, {user}!</span>
      <div className="navbar-links">
        {links.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.title}
          </Link>
        ))}
      </div>

    </nav>
  );
};
