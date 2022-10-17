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
    
`