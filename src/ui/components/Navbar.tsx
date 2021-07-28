import Avatar from "./StoriesAvatar";
import "./Navbar.scss";

export interface NavbarProps {
  initialLanguage?: "en" | "ua" | "ru";
  variant: "Homepage" | "Profilepage";
}

const Navbar = ({variant}: NavbarProps) => {
  let style = {
    width: 40,
    height: 40,
  };

  let showAvatar = (variant === "Homepage");
  let showLanguageButton = (variant === "Homepage");
  let showHomeButton = (variant !== "Profilepage");
  let unhidableHomeButton = (variant !== "Homepage")

  return (
    <header>
      <div className="logo">Linkstagram</div>

      <div className="buttons">

      {showHomeButton && 
        <form action="/">
          <button className="black-btn hideable" type="submit">
            Home
          </button>
        </form>
        }
      {unhidableHomeButton && 
        <form action="/">
          <button className="black-btn" type="submit">
            Home
          </button>
        </form>
        }

        {showLanguageButton && 
        <button className="white-btn hideable">en</button>}

        {showAvatar && 
        <a href="/profile">
        <Avatar url="https://i.pravatar.cc/300?u=297" style={style} />
        </a>}

      </div>
    </header>
  );
};

export default Navbar;
