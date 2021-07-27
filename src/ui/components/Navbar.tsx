import Avatar from "./StoriesAvatar";
import "./Navbar.scss";

export interface NavbarProps {
  initialLanguage?: "en" | "ua" | "ru";
}

const Navbar = ({}: NavbarProps) => {
  let style = {
    width: 40,
    height: 40,
  };

  return (
    <header>
      <div className="logo">Linkstagram</div>

      <div className="buttons">
        <form action="/">
          <button className="black-btn" type="submit">
            Home
          </button>
        </form>
        <button className="white-btn">en</button>

        <a href="/profile">
        <Avatar url="https://i.pravatar.cc/300?u=297" style={style} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
