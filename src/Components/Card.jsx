import React from "react";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const { name, username, id } = dentist;

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFavs = [...favs, { name, username, id }];
    localStorage.setItem("favs", JSON.stringify(newFavs));
    alert(`${name} added to favorites!`);
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
      
      <Link to={`/dentist/${id}`}>View Details</Link>
    </div>
  );
};

export default Card;

