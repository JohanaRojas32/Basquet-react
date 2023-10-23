export { createContext } from "react";

// creamos el contexto
const ProductosContext = createContext()


// armamos el provider
// armo la url en el .env y la traigo aca:
const url = import.meta.env.VITE_ENDPOINT_PRODUCTOS




//exportamos