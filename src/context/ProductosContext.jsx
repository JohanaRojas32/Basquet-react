import { createContext, useEffect, useState } from "react";
import { get, post, put } from "../utils/http";
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


    //! METODO PUT - para modificar o actualizar productos:
    
    const modificarProducto = async (productoEditado) => {
        console.log(productoEditado)
        const urlCompleta = url + productoEditado.id 
        console.log(urlCompleta)

        try {
            const fetchConfig = {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(productoEditado)          // porque el backend siempre va a esperar un string
            }
         
            const respuesta = await fetch(urlCompleta, fetchConfig)
              if(!respuesta.ok) {
                throw new Error(`[Algo paso con PUT] Error... ${respuesta.status}`)
              }
        
              const data = await respuesta.json() 


              const nuevaProductoDB = productos.map(producto => producto.id === productoEditado.id ? productoEditado : producto)
              setProductos(nuevaProductoDB)

    
        } catch (error) {
            console.error(`Error PUT`, error)
        }



  

    }

        
    



   const data={ productos, agregarProducto, modificarProducto }
    
    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}


//exportamos

export {ProductosProvider}

export default ProductosContext
