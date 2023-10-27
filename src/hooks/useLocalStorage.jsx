import { useState } from "react"
//Hook personalizado:


export const useLocalStorage = (clave, valorInicial = []) => {

//! LEER EL LS, LO QUE OBTENGO GUARDO EN VARIABLE valorAlmacenadoLS. Si hay algo retorno lo que hay en esa variable(parsiado para devolver un array), y si esta undefined o null me muestra el valorInicial:
    const getValorAlmacenado = () => {          // lo que este en el LS me lo va a guardar en el estado.
        try {

            const valorAlmacenadoLS = window.localStorage.getItem(clave)     /* // todos los elementos con la clave que le asigne se guardan en ValorAlmacenadoLS */
            return valorAlmacenadoLS ? JSON.parse(valorAlmacenadoLS) : valorInicial     // si es true me retorna el valor(parse-array), sino me retorna el valorInicial.

        } catch (error) {
            console.error(`Error al obtener ${clave} del localStorage`)
            return valorInicial
        }
    }


    const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())




    //! GUARDAR PRODUCTO EN EL LS:
    const guardarValorLS = (valorNuevo) => {
        try {
            
            
        const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo]    // lo que tenia mas el valor nuevo
        setValorAlmacenado(nuevoValorAlmacenado)     // cambio el estado con el array que tenia + el nuevo valor
        window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))


        } catch (error) {
            console.error(`Error al guardar ${clave} del local sotorage`)
        }
    }





    return [guardarValorLS, valorAlmacenado]

}