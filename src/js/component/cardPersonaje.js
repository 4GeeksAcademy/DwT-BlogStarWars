import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

export const CardPersonaje = (props) => {
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState(null);

    useEffect(() => {

        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/people/${props.uid}`);
                const data = await response.json();
                setCharacter(data.result.properties);
            } catch (error) {
                console.error("Error al obtener el personaje:", error);
            }
        };

        fetchCharacter();
    }, [props.uid]);

    if (!character) {
        return <div>Cargando...</div>;
    }

    return (
       <div className="card mx-3" style={{ width: "18rem" }}>
            <img 
                src={rigoImage} 
                className="card-img-top rounded shadow-sm" 
                alt="Star Wars Character" 
                style={{ maxHeight: "250px", objectFit: "cover" }}
            />
            <div className="card-body text-start">
                <h3 className="card-title fw-bold mb-2" style={{ fontSize: "1.25rem", color: "#2c3e50" }}>
                    👤 {character.name}
                </h3>
                <h5 className="card-text mb-1" style={{ fontSize: "1rem", color: "#34495e" }}>
                    <strong>⚥ Género:</strong> {character.gender}
                </h5>
                <h5 className="card-text mb-1" style={{ fontSize: "1rem", color: "#34495e" }}>
                    <strong>💇‍♂️ Color de Cabello:</strong> {character.hair_color}
                </h5>
                <h5 className="card-text mb-3" style={{ fontSize: "1rem", color: "#34495e" }}>
                    <strong>👁️ Color de Ojos:</strong> {character.eye_color}
                </h5>
                <Link to={`/personaje/${props.uid}`} className="btn btn-primary mb-2 w-100">
                    🚀 Detalles del Personaje
                </Link>
                <button 
                    className="btn btn-outline-primary w-100" 
                    onClick={() => actions.addFavorite(character.name)}>
                    <i className="fa-regular fa-heart"></i> Agregar a Favoritos
                </button>
            </div>
        </div>
    );
};
