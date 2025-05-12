import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

export const CardPlanet = (props) => {
    const { store, actions } = useContext(Context);
    const [planet, setPlanet] = useState(null);

    useEffect(() => {

        const fetchPlanet = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/planets/${props.uid}`);
                const data = await response.json();
                setPlanet(data.result.properties);
            } catch (error) {
                console.error("Error al obtener el planeta:", error);
            }
        };

        fetchPlanet();
    }, [props.uid]);

    if (!planet) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="card mx-3" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" alt="..." />
           <div className="card-body text-start">
                <h3 className="card-title fw-bold mb-2" style={{ fontSize: "1.25rem", color: "#2c3e50" }}>
                    🌍 {planet.name}
                </h3>
                <h5 className="card-text mb-1" style={{ fontSize: "1rem", color: "#34495e" }}>
                    <strong>Población:</strong> {planet.population}
                </h5>
                <h5 className="card-text mb-3" style={{ fontSize: "1rem", color: "#34495e" }}>
                    <strong>Terreno:</strong> {planet.terrain}
                </h5>
                <Link to={`/planet/${props.uid}`} className="btn btn-primary mb-2 w-100">
                    Detalles del Planeta
                </Link>
                <button 
                    className="btn btn-outline-primary w-100" 
                    onClick={() => actions.addFavorite(planet.name)}>
                    <i className="fa-regular fa-heart"></i> Agregar a Favoritos
                </button>
            </div>
        </div>
    );
};
