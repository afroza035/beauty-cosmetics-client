import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";

const Home = () => {
  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch("https://evening-beach-95611.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  console.log(cosmetics);
  return (
    <div className="row">
      {cosmetics.length === 0 && (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border text-primary"
            role="status"
          >
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}
      {cosmetics.map((cosmetic) => (
        <Cosmetic cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Home;
