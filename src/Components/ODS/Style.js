import styled from 'styled-components'

export const MomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 100%;
    border-bottom: solid 5px #B1E3F8; 
`

export const LogoContainer = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 25vw;
    @media screen and (max-width: 425px){
        width: 36vw;
    }
`

export const Logo = styled.img`
    width: 22vw;
    @media screen and (max-width: 425px){
        width: 35vw;
    }
`

export const Text = styled.div`
    display: flex;
    padding-top: 2vw;
    padding-right: 2vw;
    padding-left: 2vw;
    width: 100%;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`

export const Heading = styled.h1`
    color: #478BCA;
    font-size: 5vw;
    width: 50vw;
    @media screen and (max-width: 768px){
        width: 100%;
        text-align: center;
        margin-bottom: 2vw;
    }
    @media screen and (max-width: 425px){
        font-size: 6.3vw;
        margin-bottom: 2.5vw;
    }
`

export const Paragraph = styled.p`
    width: 50vw;
    font-size: 2vw;
    display: flex;
    align-items: center;
    text-align: justify;
    @media screen and (max-width: 768px){
        width: 70%;
        font-size: 3vw;
    }
    @media screen and (max-width: 425px){
        font-size: 4.5vw;
    }
    @media screen and (max-width: 320px){
        font-size: 5.5vw;
        width: 75%;
    }
`

export const ObjectivesContainer = styled.div`
    display: flex;
    padding-top: 2.6vw;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80%;
    @media screen and (max-width: 1024px){
        width: 90%;
    }
    @media screen and (max-width: 768px){
        width: 50%;
    }
    @media screen and (max-width: 425px){
        padding-top: 4vw;
        width: 65%;
    }
    @media screen and (max-width: 320px){
        width: 75%;
    }
`

export const ObjectivesOrange = styled.figure`
    background: #F57C00;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 5px 10px;
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
        transition: 2s;
    }
    @media screen and (max-width: 768px){
        margin-bottom: 5vw;
    }
`

export const ObjectivesGreen = styled.figure`
    background: #43A047;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 5px 10px;
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
        transition: 2s;
    }
    @media screen and (max-width: 768px){
        margin-bottom: 5vw;
    }
`

export const ObjectivesRed = styled.figure`
    background: #D32F2F;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 5px 10px;
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
        transition: 2s;
    }
    @media screen and (max-width: 768px){
        margin-bottom: 5vw;
    }
`

export const Objectives = styled.img`
    width: 10vw;
    @media screen and (max-width: 1024px){
        width: 12vw;
    }
    @media screen and (max-width: 768px){
        width: 20vw;
    }
    @media screen and (max-width: 425px){
        width: 25vw;
    }
    @media screen and (max-width: 320px){
        width: 30vw;
    }
`

export const ContainerOne = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5vw;
    width: 65%;
    height: 100vh;
    box-shadow: 5px 5px 10px;
    @media screen and (max-width: 1440px){
        height: 80vh;
    }
    @media screen and (max-width: 768px){
        height: 85vh;
    }
    @media screen and (max-width: 425px){
        width: 85%;
        height: 95vh;
    }
    @media screen and (max-width: 320px){
        height: 110vh;
    }
`
export const OrangeContainer = styled.div`
    display:flex;
    background: #F57C00;
    justify-content: space-between;
    align-items: center;
    padding-left: 1vw;
    height: 35%;
    @media screen and (max-width: 1024px){
        height: 30%;
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 40%;
    }
    @media screen and (max-width: 320px){
        height: 35%;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 90%;
`

export const ImageContainer = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media screen and (max-width: 768px){
        width: 100%;
        height: 60%;
    }
`

export const Image = styled.img`
    width: 30vw;
    @media screen and (max-width: 768px){
        width: 35vw;
    }
    @media screen and (max-width: 425px){
        width: 60vw;
    }
    @media screen and (max-width: 375px){
        width: 70vw;
    }
    @media screen and (max-width: 320px){
        width: 75vw;
    }
`

export const SubTitle = styled.h4`
    color: white;
    font-weight: 400;
    font-size: 1vw;
    @media screen and (max-width: 1024px){
        font-size: 1.1vw
    }
    @media screen and (max-width: 768px){
        font-size: 1.5vw;
    }
    @media screen and (max-width: 425px){
        font-size: 3vw;
    }
    @media screen and (max-width: 375px){
        font-size: 3.3vw;
    }
    @media screen and (max-width: 320px){
        font-size: 4vw;
    }
`

export const Number = styled.h2`
    color: white;
    font-size: 5vw;
    @media screen and (max-width: 768px){
        font-size: 7vw;
    }
    @media screen and (max-width: 425px){
        font-size: 10vw;
    }
    @media screen and (max-width: 375px){
        font-size: 12vw;
    }
    @media screen and (max-width: 320px){
        font-size: 15vw;
    }
`

export const Title = styled.h2`
    color: white;
    font-size: 2vw;
    @media screen and (max-width: 1024px){
        font-size: 2.2vw
    }
    @media screen and (max-width: 768px){
        font-size: 3vw;
    }
    @media screen and (max-width: 425px){
        font-size: 5vw;
    }
    @media screen and (max-width: 375px){
        font-size: 5.5vw;
    }
    @media screen and (max-width: 320px){
        font-size: 6vw;
    }
`

export const BodyContainer = styled.div`
    background: #f1faee;
    padding: 2vw;
    height: 65%;
    @media screen and (max-width: 320px){
        height: 70%;
    }
`

export const ObjectiveTitle = styled.h2`
    font-size: 1.5vw;
    margin-bottom: 1.5vw;
    @media screen and (max-width: 1024px){
        font-size: 1.7vw;
        margin-bottom: 1.6vw;
    }
    @media screen and (max-width: 768px){
        font-size: 2.5vw;
    }
    @media screen and (max-width: 425px){
        font-size: 4vw;
    }
    @media screen and (max-width: 320px){
        font-size: 4.5vw;
    }
`

export const ParagraphTwo = styled.p`
    margin-bottom: 1.5vw;
    text-align: justify;
    font-size: 1vw;
    @media screen and (max-width: 1024px){
        font-size: 1.3vw;
        margin-bottom: 1.7vw;
    }
    @media screen and (max-width: 768px){
        font-size: 1.6vw;
    }
    @media screen and (max-width: 425px){
        font-size: 3vw;
    }
    @media screen and (max-width: 375px){
        font-size: 3.2vw;
    }
    @media screen and (max-width: 320px){
        font-size: 4vw;
    }
`

export const ContainerTwo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5vw;
    width: 65%;
    height: 100vh;
    box-shadow: 5px 5px 10px;
    @media screen and (max-width: 1440px){
        height: 80vh;
    }
    @media screen and (max-width: 1024px){
        height: 74vh;
    }
    @media screen and (max-width: 768px){
        height: 88vh;
    }
    @media screen and (max-width: 425px){
        width: 85%;
        height: 102vh;
    }
    @media screen and (max-width: 320px){
        height: 122vh;
    }
`

export const GreenContainer = styled.div`
    display:flex;
    background: #43a047;
    justify-content: space-between;
    align-items: center;
    padding-left: 1vw;
    height: 45%;
    @media screen and (max-width: 1024px){
        height: 40%;
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 50%;
    }
    @media screen and (max-width: 320px){
        height: 35%;
    }
`

export const ContainerSeven = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5vw;
    width: 65%;
    height: 80vh;
    box-shadow: 5px 5px 10px;
    @media screen and (max-width: 1440px){
        height: 70vh;
    }
    @media screen and (max-width: 1024px){
        height: 60vh;
    }
    @media screen and (max-width: 768px){
        height: 70vh;
    }
    @media screen and (max-width: 425px){
        width: 85%;
        height: 80vh;
    }
    @media screen and (max-width: 320px){
        height: 83vh;
    }
`

