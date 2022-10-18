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
`
export const HeadContainer = styled.div`
    display:flex;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ImageContainer = styled.figure`
    
`