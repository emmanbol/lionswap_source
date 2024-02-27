
// import styled from 'styled-components'

// import React /*, { useState, useEffect }*/ from 'react'

import React from 'react'

/*
function Rara(){
    return (
        <div style={{marginTop: '10px'}}>
            <img width='200px' height='200px' src='/images/lion_top.png' alt='alt1' />
        </div>
    )
}

function Papa(){

    const [isMobile, setIsMobile] = useState(true)

    const handleResize = () => {
        if(window.innerWidth < 720) 
            setIsMobile(true)
        else
            setIsMobile(false)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
      <>
        {isMobile && <Rara />}
        
      </>
    )
}
*/


function RaraUp(){
    return (
        <div style={{marginTop: '-2px', marginBottom: '8px'}}>
            <img width='200px' height='200px' src='/images/lion_crown.png' alt='alt1' />
        </div>
    )
}

function PapaUp(){

    /* const [isMobile, setIsMobile] = useState(true)

    const handleResize = () => {
        if(window.innerWidth < 720) 
            setIsMobile(true)
        else
            setIsMobile(false)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, []) */

    return (
      <>
        {/* isMobile && <RaraUp /> */}
        <RaraUp />
        
      </>
    )
}

// export {/* Papa,*/ PapaUp }
export default PapaUp 