//! CRUD -> R: READ => GET


export const get = async (url) => {
    
    try {
        const respuesta = await fetch(url)

        if(!respuesta.ok) {
            throw new Error(`Algo paso: ${respuesta.status} ${respuesta.statusText}`)
        }
    
        const data = await respuesta.json()     // array de prod disponible
    
        return data
    
    } catch (error) {
        console.log(`ERROG get ->`, error)
    }
}




//! CRUD -> C:  CREATE => POST

//! CRUD -> U:  UPDATE => PUT

//! CRUD -> D:  DELETE => DELETE
