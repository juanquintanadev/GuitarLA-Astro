
import React, {useState} from 'react'

function ComponenteReact() {

    const [cantidad, setCantidad] = useState(0)
    console.log('Cliente y servidor con client:load')
    return (
        <>
            <div>ComponenteReact</div>
            <p>{cantidad}</p>
        </>
        
    )
}

export default ComponenteReact