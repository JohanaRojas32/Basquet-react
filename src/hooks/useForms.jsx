import { useState } from "react"

export const useForms = (estadoInicial = {} ) => {
    const [values, setValues] = useState(estadoInicial)     // ese estadoInicial que empieza vacio "{}", tiene un estado y una funcion que modifica ese estado


    const handleChangeInput = (e) => {
        const {name, value} = e.target
        setValues({
            ...values, [name]: value                   // lo que tenia (...values) + el valor que estan escribiendo en ese momento sobre el input
        })
    }


    return [values, handleChangeInput]
}