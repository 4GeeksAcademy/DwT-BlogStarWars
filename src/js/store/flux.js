const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			favoritos: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			addFavorite: (name) => {
				console.log(name)
				const store = getStore();
				if(store.favoritos.includes(name)){
					console.log('Personaje ya existente en la lista')
					setStore({
						 favoritos: store.favoritos.filter((personaje)=> personaje != name )
						});
				}else{
					console.log('No encontrado, agregar')
					setStore({ favoritos: [...store.favoritos,name] });
				}
				
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log('se cargo la pagina')
				Promise.all([
					fetch('https://www.swapi.tech/api/people').then((response) => response.json()),
					fetch('https://www.swapi.tech/api/planets').then((response) => response.json())
					])
				
				.then(([dataPersonajes, dataPlanetas]) => {
					setStore({
						personajes: dataPersonajes.results,
						planets: dataPlanetas.results
					});
				})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
