import "./Navbar.scss";
import { Link } from "react-router-dom";

import Avatar from "../StoriesAvatar/StoriesAvatar";

export interface NavbarProps {
  initialLanguage?: "en" | "ua" | "ru";
  variant: "Homepage" | "Profilepage" | "LoginPage";
}

const Navbar: React.FC<NavbarProps> = ({ variant }) => {
  const style = {
    width: 40,
    height: 40,
  };

  const isHomePage = variant === "Homepage";
  const showLanguageDrop = variant === "Homepage" || variant === "LoginPage";
  const showHomeButton = variant === "Profilepage";

  return (
    <header>
      <div className="logo">Linkstagram</div>

      <div className="buttons">
        {showHomeButton && (
          <Link to="/">
            <button className="black-btn hideable" type="submit">
              Home
            </button>
          </Link>
        )}
        {isHomePage && (
          <Link to="/">
            <button className="black-btn" type="submit">
              Home
            </button>
          </Link>
        )}

        {showLanguageDrop && <button type="button" className="white-btn hideable">en</button>}

        {isHomePage && (
          <Link to="/profile">
            <Avatar url="https://i.pravatar.cc/300?u=297" style={style} />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
