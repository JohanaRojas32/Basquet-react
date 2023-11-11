import Swal from 'sweetalert2'
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
                //console.log(productoCreado)

                const nuevaProductoDB = [...productos, productoCreado]
                setProductos(nuevaProductoDB) 

            
            } catch (error) {
                console.log(`[agregarProducto]: no se pudo agregar el nuevo producto ->`, error)
            }
        } 


    //! METODO PUT - para modificar o actualizar productos:
    
    const modificarProducto = async (productoEditado) => {
        //console.log(productoEditado)
       /*  const urlCompleta = url + '/' + productoEditado.id  */
        const urlCompleta = url + productoEditado.id 
       
        
        //console.log('esta es la url completa:', urlCompleta)

        try {
            const fetchConfig = {
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(productoEditado)        
            }
         
           const respuest = await fetch(urlCompleta, fetchConfig)
              if(!respuest.ok) {
                throw new Error(`[Algo paso con PUT] Error... ${respuest.status}`)
              }
        
              const datos = await respuest.json()
              //console.log(datos)
        
            


              const nuevaProductoDB = productos.map(producto => producto.id === productoEditado.id ? productoEditado : producto)
              setProductos(nuevaProductoDB)

    
        } catch (error) {
            console.error(`Error PUT`, error)
        }
    }




    //! METODO DELETE - Eliminar producto


    const eliminarProducto = async (id) => {


    try {
        const urlCompleta = url + id
       

        const fetchConfig = {
            method: 'DELETE',
        }

        const respuesta = await fetch(urlCompleta, fetchConfig)
        if(!respuesta.ok) {
            throw new Error(`[eliminarUsuario] Error... ${respuesta.status}`)
          }
        
          const data = await respuesta.json()
          //console.log(data)

          // actualizo la base de datos:
  const nuevaProductoDB = productos.filter(producto => producto.id !== id) 
setProductos(nuevaProductoDB)

    } catch (error) {
        console.log('Algo paso con el [eliminarProducto]')
    }



    } 
    
    



   const data={ productos, agregarProducto, modificarProducto, eliminarProducto }
    
    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}


//exportamos

export {ProductosProvider}

export default ProductosContext
