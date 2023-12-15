// import React from 'react';

// const Categories = () => {
//   return <h2>categories component</h2>;
// };

// export default Categories;

import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
