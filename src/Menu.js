// import React from 'react';

// const Menu = () => {
//   return <h2>menu component</h2>;
// };

// export default Menu;

import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};

export default Menu;
