import "./Header.css";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/Logo.svg").default} alt="logo" />
        </div>
        <div>{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button className="nav__button" type="text" onClick={onCreateModal}>
            + Add Clothes
          </button>
        </div>
        <div className="nav__name">Name</div>
        <div>
          <img src={require("../../images/avatar.svg").default} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
