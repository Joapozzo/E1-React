import React from 'react'
import {ErrorWrapper} from "./Error"

import {BiErrorAlt} from "react-icons/bi"

const PageError = () => {
  return (
    <ErrorWrapper>
        <BiErrorAlt 
          fontSize={80}
          color='var(--red)'
        />
        <h2>ERROR</h2>
        <p>PÁGINA NO ENCONTRADA</p>
    </ErrorWrapper>
  )
}

export default PageError