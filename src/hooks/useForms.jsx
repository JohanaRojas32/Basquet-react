import { useState } from "react"

export const useForms = (estadoInicial = {} ) => {
    const [values, setValues] = useState(estadoInicial)     // ese estadoInicial que empieza vacio "{}", tiene un estado y una funcion que modifica ese estado


    const handleChangeInput = (e) => {
        const {name, value} = e.target
        setValues({
            ...values, 
            [name]: Number(value)                   // lo que tenia (...values) + el valor que estan escribiendo en ese momento sobre el input
        })                          //! "Number(value)-> porque me estaba tomando cada cantidad ocmo un string y en lugar de sumarse se estaban acoplando"
    }


    return [values, handleChangeInput]
}