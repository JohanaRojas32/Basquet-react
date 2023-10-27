import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

//! Creando contexto
const CarritoContext = createContext()

//! Armando el provider
const url = import.meta.env.VITE_ENDPOINT_CARRITO

const CarritoProvider = ({ children }) => {
    //ESTADO de useLocalStorage:
    const [agregarAlCarrito, eliminarDelCarrito, vaciarCarrito,  carrito] = useLocalStorage('carrito', [])





    function elProductoAunNoExisteEnCarrito(producto) {           // va a ver si dentro de carrito ya existe el producto al que se clickea "comprar".
        return carrito.filter(prod => prod.id === producto.id).length            // 0 -> si no hay.  1-> si hay
    }


    function elProductoYaExisteEnCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id)             // retorna si hay producto en el carrito.
    }



    const agregarCarritoContext = (producto) => {

        if(!elProductoAunNoExisteEnCarrito(producto)) {      // 0 es tru porue ! lo invierte
            producto.cantidad = 1            // si no existe quiero que se cree 1
            agregarAlCarrito(producto)
        } else {
            const productoDeCarrito = elProductoYaExisteEnCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++        // que le agregue una cantidad

            window.localStorage.setItem('carrito', JSON.stringify(carrito))    //todo lo vuelvo a guardar en el LS
        }

    }
 



    
    const eliminarProductoCarritoContext = (id) => {
        eliminarDelCarrito(id)
    }

    const guardarCarritoContext = () => {            
        
    }


    const vaciarCarritoContext = () => {
        vaciarCarrito()
    }



    const data={carrito, agregarCarritoContext, eliminarProductoCarritoContext, guardarCarritoContext , vaciarCarritoContext }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}


//! Expontando

export {CarritoProvider}

export default CarritoContext