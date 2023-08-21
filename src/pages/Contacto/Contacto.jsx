import React from 'react'
import {ContactWrapper, ContactForm} from "./ContactoStlyes"

const Contacto = () => {
  return (
    <ContactWrapper>
      <h2>¡Contáctanos!</h2>
      <ContactForm>
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <input type="mail" placeholder='Mail'/>
        <input type="text" placeholder='Asunto'/>
        <button>
          Enviar
        </button>
      </ContactForm>
    </ContactWrapper>
  )
}

export default Contacto