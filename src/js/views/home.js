import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardPersonaje } from "../component/cardPersonaje";
import { CardPlanet } from "../component/cardPlanet";

export const Home = () =>  {
	
	const { store, actions } = useContext(Context);


	return (

		<div className="text-center mt-5">
			<h1 className="text-start mb-4" >Personajes</h1>
			<div className="row flex-row flex-nowrap gap-3 px-3 mb-5 px-3" style={{ overflowX: "auto" }}>
				{store.personajes.map( (personaje)=> <CardPersonaje  key={personaje.uid}  uid={personaje.uid} name={personaje.name}
					 hair_color={personaje.hair_color} gender={personaje.gender} eye_color={personaje.eye_color}/> )}
			 </div>

			  <div className="mt-5"></div>

		<h1 className="text-start mb-4" >Planetas</h1>
			 <div className="row flex-row flex-nowrap gap-3 px-3" style={{ overflowX: "auto" }}>
				{store.planets.map( (planet)=> <CardPlanet  key={planet.uid}  uid={planet.uid} name={planet.name}
					 population={planet.population} climate={planet.climate} terrain={planet.terrain}/> )}
			 </div>

			
		</div>

	
	)
};
