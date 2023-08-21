import React from 'react'
import { AboutWrapper, AboutTitle, AboutText, AddToCopa } from "./AboutStyles"

const About = () => {
  return (
    <AboutWrapper>
        
        <AboutTitle>
            <h2>Sobre Nosotros</h2>
        </AboutTitle>
        <AboutText>
            <p>Acerca de Copa: Donde la Pasión por el Fútbol Crea Estilo
    En el corazón de cada seguidor del fútbol late una pasión inquebrantable. <br /> <br /> En Copa, hemos capturado esa pasión y la hemos tejido en cada hilo de nuestra marca. Somos más que una marca de indumentaria; somos un homenaje a la esencia misma del fútbol y sus emociones. <br />
    <br />Cada producto Copa es un tributo a la emoción del juego, desde nuestras medias antideslizantes que canalizan la velocidad de un sprint ganador hasta nuestros botineros que cuidan tus instrumentos de victoria. Cada diseño está impregnado con la energía de la multitud en el estadio y la dedicación de los jugadores en el campo.
    Nos enorgullece llevar la herencia del fútbol en cada costura y estampado. <br /> <br /> Somos una declaración de estilo para quienes entienden que la pasión por el fútbol no se detiene después del pitido final. Copa es el puente entre el deporte y la moda, entre la grada y la calle.
    Únete a nosotros y lleva contigo la pasión por el fútbol en cada paso que des. Copa: donde la pasión y el estilo se encuentran en un solo nombre.
    Bienvenido a la comunidad Copa. Vive el juego, lleva la pasión.
    </p>
        </AboutText>

        <AddToCopa>
          <img src="https://www.cronista.com/files/image/663/663001/64dca76194f74.jpg" alt="" />
          <h2>SUMATE AL MUNDO COPERO</h2>
        </AddToCopa>


    </AboutWrapper>
    
  )
}

export default About