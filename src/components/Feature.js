import React from 'react'
import styled from 'styled-components'
import app from '../img/app.png'
import AnimatedShapes from './AnimatedShapes'
const Feature = () => {
    const Container = styled.div`
    display: flex;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
        padding: 30px 20px;
    }
    `;

    const Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        display: none;
    }
    `;
    const Title = styled.span`
        font-size: 60px;
        line-height: 70px;
        @media only screen and (max-width: 480px) {
            font-size: 50px;
            }
    `
    const SubTitle = styled.span`
        font-size: 24px;
        font-style: italic;
        color:#333;
    `
    const Desc = styled.p`
        font-size: 20px;
        color: #777;
    `
    const Button = styled.button`
        width: 150px;
        border: none;
        padding: 15px 20px;
        background-color: darkblue;
        color: white;
        font-size: 20px;
        border-radius: 20px;
        margin-top:4px;
        cursor: pointer;
    `
    const Right = styled.div`
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media only screen and (max-width: 480px) {
            width: 100%;
        }
        `;
    const Image = styled.img`
        width: 70%;
    `
    return (
        <Container>
            <Left><Image src={app} /></Left>
            <Right>
                <Title>  <b> High </b>quality <br />
                    <b>good</b>business
                </Title>
                <SubTitle>We know that good design means good business</SubTitle>
                <Desc>We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials that communicate their message.</Desc>
                <Desc>High quality, good design means good business. We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate their message.</Desc>
                <Button>Lean More</Button>
            </Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Feature