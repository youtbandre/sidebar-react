import React from "react";
import { NavLink, useMatch } from "react-router-dom";

const Item = ({ path, name, IconComponent }) => {
  const match = useMatch(path);

  return (
    <NavLink to={path} className="item">
      <div className="item-container">
        <IconComponent className="icon" />
        <p>{name}</p>
      </div>
      {match && <div className="matched-effect"></div>}
    </NavLink>
  );
};

export default Item;
