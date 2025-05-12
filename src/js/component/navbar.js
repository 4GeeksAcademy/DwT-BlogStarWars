import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {

	const { store, actions } = useContext(Context);
	
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-between align-items-center px-3">
      <Link to="/">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png"
          alt="Star Wars Logo"
          className="navbar-logo"
          style={{ height: "80px" }}
        />
      </Link>

      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-warning  dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos ({store.favoritos.length})
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favoritos.length > 0 ? (
              store.favoritos.map((favorito, index) => (
                <li
                  key={index}
                  className="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <span>{favorito}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => actions.addFavorite(favorito)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </li>
              ))
            ) : (
              <li className="dropdown-item">No hay favoritos</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
	);
};
