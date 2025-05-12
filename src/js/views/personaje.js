import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const Personaje = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${params.personaje_id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data.result));
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 text-center">
                    <img src={rigoImage} className="img-fluid" alt="Star Wars Character" />
                </div>
                <div className="col-md-8">
                    <h1 className="display-4 fw-bold">{character.properties?.name}</h1>
                    <p className="lead">{character.description}</p>
                    <hr className="my-4" />
                    <div className="row text-danger">
                        <div className="col-6">Name: {character.properties?.name}</div>
                        <div className="col-6">Birth Year: {character.properties?.birth_year}</div>
                        <div className="col-6">Gender: {character.properties?.gender}</div>
                        <div className="col-6">Height: {character.properties?.height}</div>
                        <div className="col-6">Skin Color: {character.properties?.skin_color}</div>
                        <div className="col-6">Eye Color: {character.properties?.eye_color}</div>
                    </div>
                    <Link to="/" className="btn btn-primary mt-4">Back home</Link>
                </div>
            </div>
        </div>
    );
};
Personaje.propTypes = {
    match: PropTypes.object
};
