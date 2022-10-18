import React, {useState} from 'react'
import * as S from './Style'
import Logo from '../../assets/logo.jfif'
import One from '../../assets/1.png'
import Two from '../../assets/2.png'
import Seven from '../../assets/7.png'
import Nine from '../../assets/9.png'
import Eleven from '../../assets/11.png'
import Fifteen from '../../assets/15.png'
import BigOne from '../../assets/big1.png'
import BigTwo from '../../assets/big2.png'
import BigSeven from '../../assets/big7.png'
import BigNine from '../../assets/big9.png'
import BigEleven from '../../assets/big11.png'
import BigFifteen from '../../assets/big15.png'

const ODS = () => {

    const [one, setOne] = useState(false)

    const OneText = () => {
        return(
            <S.ContainerOne>
                <S.HeadContainer>
                    <S.TitleContainer>

                    </S.TitleContainer>
                    <S.ImageContainer>
                        <img src={BigOne} alt='1'/>
                    </S.ImageContainer>
                </S.HeadContainer>
            </S.ContainerOne>
        )
    }
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
                <S.ObjectivesOrange>
                    <S.Objectives src={One} alt='Um'/>
                </S.ObjectivesOrange>
                <S.ObjectivesOrange>
                    <S.Objectives src={Two} alt='Dois'/>
                </S.ObjectivesOrange>
                <S.ObjectivesGreen>
                    <S.Objectives src={Seven} alt='Sete'/>
                </S.ObjectivesGreen>
                <S.ObjectivesGreen>
                    <S.Objectives src={Nine} alt='Nove'/>
                </S.ObjectivesGreen>
                <S.ObjectivesRed>
                    <S.Objectives src={Eleven} alt='Onze'/>
                </S.ObjectivesRed>
                <S.ObjectivesOrange>
                    <S.Objectives src={Fifteen} alt='Quinze'/>
                </S.ObjectivesOrange>
            </S.ObjectivesContainer>
            {OneText()}
        </S.MomContainer>
    )
}

export default ODS