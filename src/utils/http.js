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

export const post = async (url, data) => {

    const fetchConfig = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)          // porque el backend siempre va a esperar un string
    }

    
    try {
        const respuesta = await fetch(url, fetchConfig)

        if(!respuesta.ok) {
            throw new Error(`Algo paso: ${respuesta.status} ${respuesta.statusText}`)
        }
    
        const datos = await respuesta.json()     
    
       // return datos
    
    } catch (error) {
        console.log(`ERROR POST ->`, error)
    }
}



//! CRUD -> U:  UPDATE => PUT

/* 
export const put = async (productoEditado) => {

    try {
        const fetchConfig = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(productoEditado)          // porque el backend siempre va a esperar un string
        }
     
        const respuesta = await fetch(urlCompleta, config)
          if(!respuesta.ok) {
            throw new Error(`[Algo paso con PUT] Error... ${respuesta.status}`)
          }
    
          const data = await respuesta.json() 

    } catch (error) {
        console.error(`Error PUT`, error)
    } */















//! CRUD -> D:  DELETE => DELETE
