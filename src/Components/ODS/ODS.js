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
                        <S.SubTitle>Objetivo de Desenvolvimento Sustentável</S.SubTitle>
                        <S.Number>1</S.Number>
                        <S.Title>Erradicação da pobreza</S.Title>
                        <S.SubTitle>Erradicar a pobreza em todas as formas e em todos os lugares</S.SubTitle>
                    </S.TitleContainer>
                    <S.ImageContainer>
                        <S.Image src={BigOne} alt='1'/>
                    </S.ImageContainer>
                </S.HeadContainer>
                <S.BodyContainer>
                    <S.ObjectiveTitle>Objetivo 1. Acabar com a pobreza em todas as suas formas, em todos os lugares</S.ObjectiveTitle>
                    <S.ParagraphTwo>1.1 Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.ParagraphTwo>
                    <S.ParagraphTwo>1.2 Até 2030, reduzir pelo menos à metade a proporção de homens, mulheres e crianças, de todas as idades, que vivem na pobreza, em todas as suas dimensões, de acordo com as definições nacionais</S.ParagraphTwo>
                    <S.ParagraphTwo>1.4 Até 2030, garantir que todos os homens e mulheres, particularmente os pobres e vulneráveis, tenham direitos iguais aos recursos econômicos, bem como o acesso a serviços básicos, propriedade e controle sobre a terra e outras formas de propriedade, herança, recursos naturais, novas tecnologias apropriadas e serviços financeiros, incluindo microfinanças</S.ParagraphTwo>
                    <S.ParagraphTwo>1.5 Até 2030, construir a resiliência dos pobres e daqueles em situação de vulnerabilidade, e reduzir a exposição e vulnerabilidade destes a eventos extremos relacionados com o clima e outros choques e desastres econômicos, sociais e ambientais</S.ParagraphTwo>
                    <S.ParagraphTwo>1.a Garantir uma mobilização significativa de recursos a partir de uma variedade de fontes, inclusive por meio do reforço da cooperação para o desenvolvimento, para proporcionar meios adequados e previsíveis para que os países em desenvolvimento, em particular os países menos desenvolvidos, implementem programas e políticas para acabar com a pobreza em todas as suas dimensões</S.ParagraphTwo>
                    <S.ParagraphTwo>1.b Criar marcos políticos sólidos em níveis nacional, regional e internacional, com base em estratégias de desenvolvimento a favor dos pobres e sensíveis a gênero, para apoiar investimentos acelerados nas ações de erradicação da pobreza</S.ParagraphTwo>
                </S.BodyContainer>
            </S.ContainerOne>
        )
    }

    const TwoText = () => {
        return(
            <S.ContainerOne>
                <S.HeadContainer>
                    <S.TitleContainer>
                        <S.SubTitle>Objetivo de Desenvolvimento Sustentável</S.SubTitle>
                        <S.Number>2</S.Number>
                        <S.Title>Fome zero e agricultura sustentável</S.Title>
                        <S.SubTitle>Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável</S.SubTitle>
                    </S.TitleContainer>
                    <S.ImageContainer>
                        <S.Image src={BigTwo} alt='2'/>
                    </S.ImageContainer>
                </S.HeadContainer>
                <S.BodyContainer>
                    <S.ObjectiveTitle>Objetivo 2. Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável</S.ObjectiveTitle>
                    <S.ParagraphTwo>2.1 Até 2030, acabar com a fome e garantir o acesso de todas as pessoas, em particular os pobres e pessoas em situações vulneráveis, incluindo crianças, a alimentos seguros, nutritivos e suficientes durante todo o ano</S.ParagraphTwo>
                    <S.ParagraphTwo>2.2 Até 2030, acabar com todas as formas de desnutrição, incluindo atingir, até 2025, as metas acordadas internacionalmente sobre nanismo e caquexia em crianças menores de cinco anos de idade, e atender às necessidades nutricionais dos adolescentes, mulheres grávidas e lactantes e pessoas idosas</S.ParagraphTwo>
                    <S.ParagraphTwo>2.3 Até 2030, dobrar a produtividade agrícola e a renda dos pequenos produtores de alimentos, particularmente das mulheres, povos indígenas, agricultores familiares, pastores e pescadores, inclusive por meio de acesso seguro e igual à terra, outros recursos produtivos e insumos, conhecimento, serviços financeiros, mercados e oportunidades de agregação de valor e de emprego não agrícola</S.ParagraphTwo>
                    <S.ParagraphTwo>2.4 Até 2030, garantir sistemas sustentáveis de produção de alimentos e implementar práticas agrícolas resilientes, que aumentem a produtividade e a produção, que ajudem a manter os ecossistemas, que fortaleçam a capacidade de adaptação às mudanças climáticas, às condições meteorológicas extremas, secas, inundações e outros desastres, e que melhorem progressivamente a qualidade da terra e do solo</S.ParagraphTwo>
                    <S.ParagraphTwo>2.5 Até 2020, manter a diversidade genética de sementes, plantas cultivadas, animais de criação e domesticados e suas respectivas espécies selvagens, inclusive por meio de bancos de sementes e plantas diversificados e bem geridos em nível nacional, regional e internacional, e garantir o acesso e a repartição justa e equitativa dos benefícios decorrentes da utilização dos recursos genéticos e conhecimentos tradicionais associados, como acordado internacionalmente</S.ParagraphTwo>
                </S.BodyContainer>
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
            {TwoText()}
        </S.MomContainer>
    )
}

export default ODS