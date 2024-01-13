import React from 'react'
import styled from 'styled-components'
import woman from '../img/woman.png'
import AnimatedShapes from './AnimatedShapes'
const Intro = () => {
    const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 25px;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
    `
    const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
    }
    `
    const Title = styled.h1`
    width: 60%;
    font-size: 60px;
    @media only screen and (max-width: 480px) {
        width: 100%;
        font-size: 50px;
    }
    `
    const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
    `
    const Info = styled.div`
    width: 60%;
    display: flex;
    margin-top: 50px;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
        width: 100%;
        flex-direction: column;
    }
    `
    const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
    `
    const Contact = styled.div`
    display: flex;
    flex-direction: column;
    `
    const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
    `
    const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
    `
    const Right = styled.div`
    width: 40%;
    `
    const Image = styled.img`

    `
    return (
        <Container>
            <Left>
                <Title>Adventures in creative age </Title>
                <Desc>We believe in the power of simplicity and beauty in design and technology to create exceptional experiences for our clients.</Desc>
                <Info>
                    <Button>Start a project</Button>
                    <Contact>
                        <Phone>Call Us (123) 456-7890</Phone>
                        <ContactText>For any question or concern</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right><Image src={woman} /></Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Intro