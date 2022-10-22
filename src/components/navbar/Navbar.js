import React, { useEffect, useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setShow(window.scrollY > 100));
  }, []);

  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <a href="#"> <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
      /></a>
      <a href="#"><img
        className="nav-avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
        alt="Uardem"
      /></a>
    </div>
  );
}

export default Navbar;
