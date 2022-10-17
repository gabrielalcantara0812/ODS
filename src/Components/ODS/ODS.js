import React, {useState} from 'react'
import * as S from './Style'
import Logo from '../../assets/logo.jfif'
import One from '../../assets/1.png'
import Two from '../../assets/2.png'
import Seven from '../../assets/7.png'
import Nine from '../../assets/9.png'
import Fifteen from '../../assets/15.png'

const ODS = () => {
    return(
        <S.MomContainer>
            <S.Header>
                <S.LogoContainer>
                    <S.Logo src={Logo} alt='Logo'/>
                </S.LogoContainer>
            </S.Header>
            <S.Text>
                <S.Heading>Os Objetivos de Desenvolvimento Sustentável em Duque de Caxias</S.Heading>
                <S.Paragraph>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</S.Paragraph>
            </S.Text>
            <S.ObjectivesContainer>

            </S.ObjectivesContainer>
        </S.MomContainer>
    )
}

export default ODS