//PROVIDER PARA TRABAJAR DE LA MANO CON USECONTEXT PROPIO
//EL PROVIDER DEBE SER USADO IDEALMENTE EN LA APP.JSX/JS O EL MAIN.JSX
import {useEffect, useState} from "react";
import {useForm} from "../../hook/useForm";
import PokemonContext from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
    //AREA DE USESTATES
    //USESTATE PARA LA URL DEL FETCH
    const [offset, setOffset] = useState(0);
    //USESTATE PARA ALMACENAR LOS POKEMON RESULT, NO OLVIDAR QUE EL PRIMERO ES UN ARRAY VACIO
    const [allPokemons, setAllPokemons] = useState([]);
    const [globalPokemons, setGlobalPokemons] = useState([]);
    //USEFORM CUSTOM
    const { valueSearch, onInputChange, onResetForm } = useForm({
        //ESTADOS DEL FORMULARIO
        valueSearch: ''
    });
    //USESTATES SIMPLES APP
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);
    //USESTATE PARA FUNCION DE FILTRO DE POKEMON + USESTATE DE FILTROS
    const [filteredPokemons, setfilteredPokemons] = useState([]);
    const [typeSelected, setTypeSelected] = useState({
        grass: false,
        normal: false,
        fighting: false,
        flying: false,
        poison: false,
        ground: false,
        rock: false,
        bug: false,
        ghost: false,
        steel: false,
        fire: false,
        water: false,
        electric: false,
        psychic: false,
        ice: false,
        dragon: false,
        dark: false,
        fairy: false,
        unknow: false,
        shadow: false,
    });


    //GENERANDO FUNCION PARA LLAMAR LA API USANDO FETCH PARA HOMEPAGE Y MOSTRAR LOS POKEMON SEGUN EL OFFLIMIT
    const getAllPokemons = async (limit = 50) => {
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();
        //ITERAR LOS RESULTS DE LA API USANDO MAP
        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            return await res.json()
        })
        //USAR PROMISE PARA QUE LA API ENTREGUE LOS DATOS Y NO PROMESAS DESDE LOS RESULTS
        const results = await Promise.all(promises)

        setAllPokemons([
            //CREAR UN SOLO ARRAY A PARTIR DE LOS 2 ORIGINALES, "MERGEANDO"
            ...allPokemons,
            ...results
        ])
        setLoading(false)
    };

    //GENERANDO FUNCION PARA LLAMAR LA API USANDO FETCH Y BUSCAR EN TODO EL DIRECTORIO PARA SEARCHPAGE
    const getGlobalPokemons = async () => {
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${baseURL}pokemon?limit=100&offset=0`)
        const data = await res.json();
        //ITERAR LOS RESULTS DE LA API USANDO MAP
        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            return await res.json()
        })
        //USAR PROMISE PARA QUE LA API ENTREGUE LOS DATOS Y NO PROMESAS DESDE LOS RESULTS
        const results = await Promise.all(promises)
        setGlobalPokemons(results)
        setLoading(false)
    };

    //GENERANDO FUNCION PARA LLAMAR POKEMON POR ID DESDE LA APP
    const getPokemonByID = async (id) => {
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${baseURL}pokemon/${id}`)
        return await res.json()
    };

    //USEEFFECT PARA EJECUTAR FUNCION ASYNC DE FETCH ALL
    useEffect(() => {
        getAllPokemons()
        //CADA VEZ QUE OFFSET CAMBIE, EJECUTA FUNCION GETALLPOKEMON
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset]);

    //USEEFECT PARA EJECUTAR FUNCION ASYNC DE FETCH GLOBAL,
    useEffect(() => {
        getGlobalPokemons()
    }, []);

    const onClickLoadMore = () => {
        setOffset(offset + 50)
    };

    //FUNCIONES DE FILTRADO
    const handleCheckbox = e => {
        //CHECAR SI UN BOX ESTA SELECCIONADO EN BASE A UN ESTADO SELECTED DE UN LISTADO BOOLEANO CON FALSE DEFAULT
        setTypeSelected({
			...typeSelected,
            //TIPO: TRUE O FALSE
			[e.target.name]: e.target.checked,
		});
        //COMPROBAR SI HAY BOXES CHECKEADOS O SELECCIONADOS
        if (e.target.checked) {
			const filteredResults = globalPokemons.filter(pokemon =>
				pokemon.types
					.map(type => type.type.name)
					.includes(e.target.name)
			);
            console.log(filteredResults)
            setfilteredPokemons([
                //ESPARCIR ARRAY INICIAL Y LOS RESULTADOS FILTRADOS, PARA QUE TOME TODOS LOS CHECKBOX SELECCIONADOS
                ...filteredPokemons,
                ...filteredResults
            ]);
        } else {
            //FILTRAR DE LO QUE YA HA SIDO SELECCIONADO
            const filteredResults = filteredPokemons.filter(
                pokemon =>
                    // !pokemon.types DEVUELVE LOS QUE NO SON DEL TIPO SELECCIONADO
					pokemon.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setfilteredPokemons([...filteredResults]);
        }
    };


    return (
        //ACA SE PASAN O RETORNAN TODOS LOS VALORES QUE VA A PROVEER A TODO EL PROYECTO
        <PokemonContext.Provider value={{
            //RECIBIR VALORES Y FUNCIONES DE USEFORM CUSTOM Y PROVIDER PARA MANDAR LA DATA A OTROS COMPONENTES
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            globalPokemons,
            getPokemonByID,
            onClickLoadMore,
            //PARA COMPONENTE LOADER
            loading,
            setLoading,
            //PARA COMPONENTE FILTRO
            active,
            setActive,
            //FILTRO CHECKBOX
            handleCheckbox,
            filteredPokemons
        }}>
            {children}
        </PokemonContext.Provider>
    );
};
