
// import styled from 'styled-components'

import React, { useState, useEffect } from 'react'

function Rara(){
    return (
        <div style={{marginTop: '2px'}}>
            <img width='300px' height='300px' src='/images/lion_top.png' alt='alt1' />
        </div>
    )
}

function PapaU(){

    const [isMobile, setIsMobile] = useState(false)

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

export default PapaU