import { createContext, useEffect, useState } from "react";
import { get, post } from "../utils/http";
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
    

//! GET - OBTENER LOS PRODUCTOS EN EL ALTA
    const obtenerProductosBack = async () => {
       
        try {
        const productosBack = await get(url)
        setProductos(productosBack)  //seteo con los prod que me llegan del backend.
      
    } catch (error) {
        console.log(`[obtenerProductosBack] -> Algo no funciono -> ${error}`)
       }
    }


//! POST - AGREGAR PRODUCTO NUEVO Y AL DB.JSON
    const agregarProducto = async (nuevoProducto) => {
        try {

             const fetchConfig = {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(nuevoProducto)          // porque el backend siempre va a esperar un string
            }
         
            
         
                const respuesta = await fetch(url, fetchConfig)
        
                if(!respuesta.ok) {
                    throw new Error(`Algo paso: ${respuesta.status} ${respuesta.statusText}`)
                }
            
                const productoCreado = await respuesta.json()     
                console.log(productoCreado)

                const nuevaProductoDB = [...productos, productoCreado]
                setProductos(nuevaProductoDB) 

            
            } catch (error) {
                console.log(`[agregarProducto]: no se pudo agregar el nuevo producto ->`, error)
            }
        }



        
    



   const data={ productos, agregarProducto }
    
    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}


//exportamos

export {ProductosProvider}

export default ProductosContext
