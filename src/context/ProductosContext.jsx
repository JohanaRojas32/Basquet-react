import { createContext, useEffect, useState } from "react";
import { get } from "../utils/http";
export { createContext } from "react";


// creamos el contexto
const ProductosContext = createContext()


// armamos el provider
// armo la url en el .env y la traigo aca:
const url = import.meta.env.VITE_ENDPOINT_PRODUCTOS

const ProductosProvider = ( { children }) => {
    //ESTADO:
    const [productos, setProductos] = useState(null)

    //para que se ejecute una vez:
    useEffect(() => {
    obtenerProductosBack()
    }, [])
    


    const obtenerProductosBack = async () => {
       
        try {
        const productosBack = await get(url)
        setProductos(productosBack)  //seteo con los prod que me llegan del backend.
      
    } catch (error) {
        console.log(`[obtenerProductosBack] -> Algo no funciono -> ${error}`)
       }
    }




   const data={ productos }
    
    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}


//exportamos

export {ProductosProvider}

export default ProductosContext
