import React, { useState } from 'react'
import styled from 'styled-components'
import girl from '../img/girl.png'
import MiniCard from './MiniCard'
import play from '../img/play.png'
import video from '../img/video.mp4'
const Service = () => {
    const [open, setOpen] = useState(false)
    const smallScreen = window.screen.width <= 480 ? true : false;

    // start styled component
    const Container = styled.div`
    display: flex;
    height: 100%;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
    `;
    const Left = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width: 480px) {
        display: none;
    }
    `;
    const Image = styled.img`
        display: ${(props) => props.open && 'none'};
        width: 100%;
        height: 140%;
        object-fit: cover;
    `
    const Right = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
    `;
    const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px) {
        padding: 20px;
    }
    `;
    const Title = styled.h1`

    `
    const Desc = styled.p`
        font-size: 20px;
        margin-top: 20px;
        color: #555;
    `
    const CardContainer = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    `
    const Button = styled.button`
        width: 180px;
        border: none;
        border-radius: 10px;
        background-color: darkblue;
        color: white;
        font-size: 20px;
        padding: 15px;
        cursor: pointer;
        margin-top: 20px;
        display: flex;
        align-items: center;
    `
    const Icon = styled.img`
        width: 20px;
        margin-right: 10px;
    `
    const Video = styled.video`
    display: ${(props) => !props.open && "none"};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
    `;
    const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;


    const CloseButton = styled.button`
    position: absolute;
    background-color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    right: 5px;
    top: 30%;
`;
    return (
        <Container>
            <Left>
                <Image open={open} src={girl} />
                <Video
                    open={open}
                    autoPlay
                    loop
                    controls
                    src={video}
                />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>
                        We provide digital experience services to startups and small
                        businesses to looking for a partner of their digital media, design &
                        development, lead generation and communications requirents. We work
                        with you, not for you. Although we have a great resources
                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}>
                        <Icon src={play} />
                        How it works
                    </Button>
                </Wrapper>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video
                        open={open}
                        autoPlay
                        loop
                        controls
                        src={video}
                    />
                    <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
        </Container>
    );
};
export default Service