import React from "react";
import {Link} from "react-router-dom";

function HeadLine() {
  return (<div>
    <h1>Notes</h1>
    <Link to="/">
      <li>Home</li>
    </Link>
    <Link to="/shop">
      <li>Shop</li>
    </Link>

  </div>);
}

export { HeadLine as default };
