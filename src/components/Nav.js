import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ showLibrary, setShowLibrary }) => {
  const showLibraryHandle = (e) => {
    setShowLibrary(!showLibrary);
  };
  return (
    <nav>
      <h1>ListenClose</h1>
      <button onClick={showLibraryHandle}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
