import React from 'react'
import { HeroContainer, Benefits, BenefitsCard, BenefitsCardText, BenefitsCardIcon } from './HeroStyles'

import {LiaShippingFastSolid} from "react-icons/lia"
import {AiFillCreditCard} from "react-icons/ai"
import {AiFillLock} from "react-icons/ai"

import ImgHeroFrom from "./model/DSC_0443.png"

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <img src={ImgHeroFrom} alt="" />
        <Benefits>

          <BenefitsCard>
            <BenefitsCardIcon>
              <LiaShippingFastSolid/>
            </BenefitsCardIcon>
            <BenefitsCardText>
              <h2>ENVÍAMOS TU COMPRA
</h2>
              <p>Entregas a todo el pais</p>
            </BenefitsCardText>
          </BenefitsCard>

          <BenefitsCard>
            <BenefitsCardIcon>
              <AiFillCreditCard/>
            </BenefitsCardIcon>
            <BenefitsCardText>
              <h2>PAGÁ COMO QUIERAS
</h2>
              <p>Tarjetas de crédito o efectivo.</p>
            </BenefitsCardText>
          </BenefitsCard>

          <BenefitsCard>
            <BenefitsCardIcon>
              <AiFillLock/>
            </BenefitsCardIcon>
            <BenefitsCardText>
              <h2>COMPRÁ DE MANERA SEGURA
</h2>
              <p>Tus datos siempre protegidos</p>
            </BenefitsCardText>
          </BenefitsCard>

        </Benefits>
      </HeroContainer>
    </>

  )
};

export default Hero