import React from "react";

const HeaderLogoOpenMenu = ({
  willBeShown = false,
  setWillBeShown = () => {},
}) => {
  const onClickLogo = () => {
    setWillBeShown(!willBeShown);
  };

  return (
    <div className="globalIconBtn" onClick={onClickLogo}>
      <i className="fas fa-bars"></i>
    </div>
  );
};

export default HeaderLogoOpenMenu;
