//USECONTEXT PERMITE PASAR DATOS ENTRE COMPONENTES SIN TENER QUE USAR LOS PROPS EN CADA UNO DE ELLOS (PADRE A HIJO, ARRIBA HACIA ABAJO), IDEALMENTE USADO CON VARIABLES Y DATOS GLOBALES
//CONTIENE UN OBJETO PROVIDER Y CONSUMER, USECONTEXT FUNCIONA COMO CONSUMER
//TIENE QUE USARSE EL CONTEXTO POR EL PROVIDER

import { createContext } from "react";

const PokemonContext = createContext()

export default PokemonContext;
