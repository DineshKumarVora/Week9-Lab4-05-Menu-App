// import React, { useState } from 'react';
// import Menu from './Menu';
// import Categories from './Categories';
// import items from './data';

// function App() {
//   return <h2>menu project setup</h2>;
// }

// export default App;

import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import Title from "./Title";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
