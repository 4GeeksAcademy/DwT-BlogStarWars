import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const Planet = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [planet, setPlanet] = useState({});

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${params.planets_id}`)
            .then((response) => response.json())
            .then((data) => setPlanet(data.result));
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 text-center">
                    <img src={rigoImage} className="img-fluid" alt="Star Wars Planet" />
                </div>
                <div className="col-md-8">
                    <h1 className="display-4 fw-bold">{planet.properties?.name}</h1>
                    <p className="lead">{planet.description}</p>
                    <hr className="my-4" />
                    <div className="row text-danger">
                        <div className="col-6">Name: {planet.properties?.name}</div>
                        <div className="col-6">Climate: {planet.properties?.climate}</div>
                        <div className="col-6">Terrain: {planet.properties?.terrain}</div>
                        <div className="col-6">Population: {planet.properties?.population}</div>
                        <div className="col-6">Diameter: {planet.properties?.diameter}</div>
                        <div className="col-6">Gravity: {planet.properties?.gravity}</div>
                    </div>
                    <Link to="/" className="btn btn-primary mt-4">Back home</Link>
                </div>
            </div>
        </div>
    );
};
Planet.propTypes = {
    match: PropTypes.object
};
