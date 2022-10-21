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
    const [two, setTwo] = useState(false)
    const [seven, setSeven] = useState(false)
    const [nine, setNine] = useState(false)
    const [eleven, setEleven] = useState(false)
    const [fifteen, setFifteen] = useState(false)

    const OneText = () => {
        return(
            <S.ContainerOne>
                <S.OrangeContainer>
                    <S.TitleContainer>
                        <S.SubTitle>Objetivo de Desenvolvimento Sustentável</S.SubTitle>
                        <S.Number>1</S.Number>
                        <S.Title>Erradicação da pobreza</S.Title>
                        <S.SubTitle>Erradicar a pobreza em todas as formas e em todos os lugares</S.SubTitle>
                    </S.TitleContainer>
                    <S.ImageContainer>
                        <S.Image src={BigOne} alt='1'/>
                    </S.ImageContainer>
                </S.OrangeContainer>
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
            <S.ContainerTwo>
                <S.OrangeContainer>
                    <S.TitleContainer>
                        <S.SubTitle>Objetivo de Desenvolvimento Sustentável</S.SubTitle>
                        <S.Number>2</S.Number>
                        <S.Title>Fome zero e agricultura sustentável</S.Title>
                        <S.SubTitle>Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável</S.SubTitle>
                    </S.TitleContainer>
                    <S.ImageContainer>
                        <S.Image src={BigTwo} alt='2'/>
                    </S.ImageContainer>
                </S.OrangeContainer>
                <S.BodyContainer>
                    <S.ObjectiveTitle>Objetivo 2. Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável</S.ObjectiveTitle>
                    <S.ParagraphTwo>2.1 Até 2030, acabar com a fome e garantir o acesso de todas as pessoas, em particular os pobres e pessoas em situações vulneráveis, incluindo crianças, a alimentos seguros, nutritivos e suficientes durante todo o ano</S.ParagraphTwo>
                    <S.ParagraphTwo>2.2 Até 2030, acabar com todas as formas de desnutrição, incluindo atingir, até 2025, as metas acordadas internacionalmente sobre nanismo e caquexia em crianças menores de cinco anos de idade, e atender às necessidades nutricionais dos adolescentes, mulheres grávidas e lactantes e pessoas idosas</S.ParagraphTwo>
                    <S.ParagraphTwo>2.3 Até 2030, dobrar a produtividade agrícola e a renda dos pequenos produtores de alimentos, particularmente das mulheres, povos indígenas, agricultores familiares, pastores e pescadores, inclusive por meio de acesso seguro e igual à terra, outros recursos produtivos e insumos, conhecimento, serviços financeiros, mercados e oportunidades de agregação de valor e de emprego não agrícola</S.ParagraphTwo>
                    <S.ParagraphTwo>2.4 Até 2030, garantir sistemas sustentáveis de produção de alimentos e implementar práticas agrícolas resilientes, que aumentem a produtividade e a produção, que ajudem a manter os ecossistemas, que fortaleçam a capacidade de adaptação às mudanças climáticas, às condições meteorológicas extremas, secas, inundações e outros desastres, e que melhorem progressivamente a qualidade da terra e do solo</S.ParagraphTwo>
                    <S.ParagraphTwo>2.5 Até 2020, manter a diversidade genética de sementes, plantas cultivadas, animais de criação e domesticados e suas respectivas espécies selvagens, inclusive por meio de bancos de sementes e plantas diversificados e bem geridos em nível nacional, regional e internacional, e garantir o acesso e a repartição justa e equitativa dos benefícios decorrentes da utilização dos recursos genéticos e conhecimentos tradicionais associados, como acordado internacionalmente</S.ParagraphTwo>
                </S.BodyContainer>
            </S.ContainerTwo>
        )
    }

    const SevenText = () => {
        return(
            <S.ContainerSeven>
                <S.GreenContainer>
                    <S.TitleContainer>
                        <S.SubTitle>Objetivo de Desenvolvimento Sustentável</S.SubTitle>
                        <S.Number>7</S.Number>
                        <S.Title>Energia limpa e acessível</S.Title>
                        <S.SubTitle>Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas para todos</S.SubTitle>
                    </S.TitleContainer>
                    <S.ImageContainer>
                        <S.Image src={BigSeven} alt='7'/>
                    </S.ImageContainer>
                </S.GreenContainer>
                <S.BodyContainer>
                    <S.ObjectiveTitle>Objetivo 7. Assegurar o acesso confiável, sustentável, moderno e a preço acessível à energia para todas e todos</S.ObjectiveTitle>
                    <S.ParagraphTwo>7.1 Até 2030, assegurar o acesso universal, confiável, moderno e a preços acessíveis a serviços de energia</S.ParagraphTwo>
                    <S.ParagraphTwo>7.2 Até 2030, aumentar substancialmente a participação de energias renováveis na matriz energética global</S.ParagraphTwo>
                    <S.ParagraphTwo>7.3 Até 2030, dobrar a taxa global de melhoria da eficiência energética</S.ParagraphTwo>
                    <S.ParagraphTwo>7.a Até 2030, reforçar a cooperação internacional para facilitar o acesso a pesquisa e tecnologias de energia limpa, incluindo energias renováveis, eficiência energética e tecnologias de combustíveis fósseis avançadas e mais limpas, e promover o investimento em infraestrutura de energia e em tecnologias de energia limpa</S.ParagraphTwo>
                    <S.ParagraphTwo>7.b Até 2030, expandir a infraestrutura e modernizar a tecnologia para o fornecimento de serviços de energia modernos e sustentáveis para todos nos países em desenvolvimento, particularmente nos países menos desenvolvidos, nos pequenos Estados insulares em desenvolvimento e nos países em desenvolvimento sem litoral, de acordo com seus respectivos programas de apoio</S.ParagraphTwo>
                </S.BodyContainer>
            </S.ContainerSeven>
        )
    }

    const NineText = () => {
        return(
            <S.ContainerTwo>
                <S.GreenContainer>
                    <S.TitleContainer>
                        <S.SubTitle>Objetivo de Desenvolvimento Sustentável</S.SubTitle>
                        <S.Number>9</S.Number>
                        <S.Title>Indústria, inovação e infraestrutura</S.Title>
                        <S.SubTitle>Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação</S.SubTitle>
                    </S.TitleContainer>
                    <S.ImageContainer>
                        <S.Image src={BigNine} alt='9'/>
                    </S.ImageContainer>
                </S.GreenContainer>
                <S.BodyContainer>
                    <S.ObjectiveTitle>Objetivo 9. Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação</S.ObjectiveTitle>
                    <S.ParagraphTwo>9.1 Desenvolver infraestrutura de qualidade, confiável, sustentável e resiliente, incluindo infraestrutura regional e transfronteiriça, para apoiar o desenvolvimento econômico e o bem-estar humano, com foco no acesso equitativo e a preços acessíveis para todos</S.ParagraphTwo>
                    <S.ParagraphTwo>9.2 Promover a industrialização inclusiva e sustentável e, até 2030, aumentar significativamente a participação da indústria no setor de emprego e no PIB, de acordo com as circunstâncias nacionais, e dobrar sua participação nos países menos desenvolvidos</S.ParagraphTwo>
                    <S.ParagraphTwo>9.3 Aumentar o acesso das pequenas indústrias e outras empresas, particularmente em países em desenvolvimento, aos serviços financeiros, incluindo crédito acessível e sua integração em cadeias de valor e mercados</S.ParagraphTwo>
                    <S.ParagraphTwo>9.4 Até 2030, modernizar a infraestrutura e reabilitar as indústrias para torná-las sustentáveis, com eficiência aumentada no uso de recursos e maior adoção de tecnologias e processos industriais limpos e ambientalmente corretos; com todos os países atuando de acordo com suas respectivas capacidades</S.ParagraphTwo>
                    <S.ParagraphTwo>9.5 Fortalecer a pesquisa científica, melhorar as capacidades tecnológicas de setores industriais em todos os países, particularmente os países em desenvolvimento, inclusive, até 2030, incentivando a inovação e aumentando substancialmente o número de trabalhadores de pesquisa e desenvolvimento por milhão de pessoas e os gastos público e privado em pesquisa e desenvolvimento</S.ParagraphTwo>
                </S.BodyContainer>
            </S.ContainerTwo>
        )
    }

    const ElevenText = () => {
        return(
            <S.ContainerEleven>
                <S.RedContainer>
                    <S.TitleContainer>
                        <S.SubTitle>Objetivo de Desenvolvimento Sustentável</S.SubTitle>
                        <S.Number>11</S.Number>
                        <S.Title>Cidades e comunidades sustentáveis</S.Title>
                        <S.SubTitle>Tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentáveis</S.SubTitle>
                    </S.TitleContainer>
                    <S.ImageContainer>
                        <S.Image src={BigEleven} alt='11'/>
                    </S.ImageContainer>
                </S.RedContainer>
                <S.BodyContainer>
                    <S.ObjectiveTitle>Objetivo 11. Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis</S.ObjectiveTitle>
                    <S.ParagraphTwo>11.1 Até 2030, garantir o acesso de todos à habitação segura, adequada e a preço acessível, e aos serviços básicos e urbanizar as favelas</S.ParagraphTwo>
                    <S.ParagraphTwo>11.2 Até 2030, proporcionar o acesso a sistemas de transporte seguros, acessíveis, sustentáveis e a preço acessível para todos, melhorando a segurança rodoviária por meio da expansão dos transportes públicos, com especial atenção para as necessidades das pessoas em situação de vulnerabilidade, mulheres, crianças, pessoas com deficiência e idosos</S.ParagraphTwo>
                    <S.ParagraphTwo>11.3 Até 2030, aumentar a urbanização inclusiva e sustentável, e as capacidades para o planejamento e gestão de assentamentos humanos participativos, integrados e sustentáveis, em todos os países</S.ParagraphTwo>
                    <S.ParagraphTwo>11.5 Até 2030, reduzir significativamente o número de mortes e o número de pessoas afetadas por catástrofes e substancialmente diminuir as perdas econômicas diretas causadas por elas em relação ao produto interno bruto global, incluindo os desastres relacionados à água, com o foco em proteger os pobres e as pessoas em situação de vulnerabilidade</S.ParagraphTwo>
                    <S.ParagraphTwo>11.7 Até 2030, proporcionar o acesso universal a espaços públicos seguros, inclusivos, acessíveis e verdes, particularmente para as mulheres e crianças, pessoas idosas e pessoas com deficiência</S.ParagraphTwo>
                </S.BodyContainer>
            </S.ContainerEleven>
        )
    }

    const FifteenText = () => {
        return(
            <S.ContainerFifteen>
                <S.OrangeContainerTwo>
                    <S.TitleContainerOrange>
                        <S.SubTitle>Objetivo de Desenvolvimento Sustentável</S.SubTitle>
                        <S.Number>15</S.Number>
                        <S.Title>Vida terrestre</S.Title>
                        <S.SubTitle>Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, travar e reverter a degradação dos solos e travar a perda da biodiversidade</S.SubTitle>
                    </S.TitleContainerOrange>
                    <S.ImageContainer>
                        <S.Image src={BigFifteen} alt='15'/>
                    </S.ImageContainer>
                </S.OrangeContainerTwo>
                <S.BodyContainer>
                    <S.ObjectiveTitle>Objetivo 15. Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade</S.ObjectiveTitle>
                    <S.ParagraphTwo>15.1 Até 2020, assegurar a conservação, recuperação e uso sustentável de ecossistemas terrestres e de água doce interiores e seus serviços, em especial florestas, zonas úmidas, montanhas e terras áridas, em conformidade com as obrigações decorrentes dos acordos internacionais</S.ParagraphTwo>
                    <S.ParagraphTwo>15.2 Até 2020, promover a implementação da gestão sustentável de todos os tipos de florestas, deter o desmatamento, restaurar florestas degradadas e aumentar substancialmente o florestamento e o reflorestamento globalmente</S.ParagraphTwo>
                    <S.ParagraphTwo>15.3 Até 2030, combater a desertificação, restaurar a terra e o solo degradado, incluindo terrenos afetados pela desertificação, secas e inundações, e lutar para alcançar um mundo neutro em termos de degradação do solo</S.ParagraphTwo>
                    <S.ParagraphTwo>15.4 Até 2030, assegurar a conservação dos ecossistemas de montanha, incluindo a sua biodiversidade, para melhorar a sua capacidade de proporcionar benefícios que são essenciais para o desenvolvimento sustentável</S.ParagraphTwo>
                    <S.ParagraphTwo>15.5 Tomar medidas urgentes e significativas para reduzir a degradação de habitat naturais, deter a perda de biodiversidade e, até 2020, proteger e evitar a extinção de espécies ameaçadas</S.ParagraphTwo>
                </S.BodyContainer>
            </S.ContainerFifteen>
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
                <S.ObjectivesOrange onClick={()=>{setOne(!one); setTwo(false); setSeven(false); setNine(false); setEleven(false); setFifteen(false)}}>
                    <S.Objectives src={One} alt='Um'/>
                </S.ObjectivesOrange>
                <S.ObjectivesOrange onClick={()=>{setOne(false); setTwo(!two); setSeven(false); setNine(false); setEleven(false); setFifteen(false)}}>
                    <S.Objectives src={Two} alt='Dois'/>
                </S.ObjectivesOrange>
                <S.ObjectivesGreen onClick={()=>{setOne(false); setTwo(false); setSeven(!seven); setNine(false); setEleven(false); setFifteen(false)}}>
                    <S.Objectives src={Seven} alt='Sete'/>
                </S.ObjectivesGreen>
                <S.ObjectivesGreen onClick={()=>{setOne(false); setTwo(false); setSeven(false); setNine(!nine); setEleven(false); setFifteen(false)}}>
                    <S.Objectives src={Nine} alt='Nove'/>
                </S.ObjectivesGreen>
                <S.ObjectivesRed onClick={()=>{setOne(false); setTwo(false); setSeven(false); setNine(false); setEleven(!eleven); setFifteen(false)}}>
                    <S.Objectives src={Eleven} alt='Onze'/>
                </S.ObjectivesRed>
                <S.ObjectivesOrange onClick={()=>{setOne(false); setTwo(false); setSeven(false); setNine(false); setEleven(false); setFifteen(!fifteen)}}>
                    <S.Objectives src={Fifteen} alt='Quinze'/>
                </S.ObjectivesOrange>
            </S.ObjectivesContainer>
            {one && OneText()}
            {two && TwoText()}
            {seven && SevenText()}
            {nine && NineText()}
            {eleven && ElevenText()}
            {fifteen && FifteenText()}
        </S.MomContainer>
    )
}

export default ODS