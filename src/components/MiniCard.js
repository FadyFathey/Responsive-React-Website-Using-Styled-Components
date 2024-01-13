import React from 'react'
import styled from 'styled-components'
import search from '../img/search.png'
const MiniCard = () => {
    const Container = styled.div`
        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 0 17px -11px rgba(0, 0, 0, 0.58);
        @media only screen and (max-width: 480px) {
            width: 50px
            }
    `
    const Image = styled.img`
        width: 20px;
    `
    const Text = styled.div`
        margin-top: 10px;
        text-align: center;
        @media only screen and (max-width: 480px) {
            font-size: 14px;
            }
    `
    return (
        <Container>
            <Image src={search} />
            <Text>
                lorem ipsum dolor sit amet consectetur
            </Text>
        </Container>
    )
}

export default MiniCard