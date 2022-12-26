import whiteLogo from "../images/finder_logo_white.png";
import colorLogo from "../images/color-logo-finder.png";

const Nav = ({ authToken, minimal, setShowModal, showModal, setuserSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setuserSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
      <a href="/"><img
          className="logo"
          src={minimal ? colorLogo : whiteLogo}
          alt="logo"
        /></a>
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};
export default Nav;