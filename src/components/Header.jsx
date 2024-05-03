import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10">
      <Link to={`/`}>
        <h1 className="text-red-600 text-4xl">ThunkFlix</h1>
      </Link>
    </header>
  );
};

export default Header;
