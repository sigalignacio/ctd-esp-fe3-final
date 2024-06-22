import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const favsFromLocalStorage = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(favsFromLocalStorage);
  }, []);

  if (favs.length === 0) {
    return <div>No favorites added yet!</div>;
  }

  return (
    <main>
      <h1>Favorites</h1>
      <div className="card-grid">
        {favs.map((dentist, index) => (
          <Card key={index} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Favs;
