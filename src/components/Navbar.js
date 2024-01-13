import React from 'react'
import styled from 'styled-components'
const Navbar = () => {
    const Container = styled.div`
    height: 50px;   
    `
    const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center ;
    justify-content: space-between;
    `
    const Left = styled.div`
        width: 60%;
        display: flex;
        align-items: center;
    `
    const Logo = styled.h1`
        font-weight: bold;
        text-decoration: underline crimson; 
        `
    const Menu = styled.ul`
        display: flex;
        list-style: none;
        margin-top: 15px;
        margin-left: 320px;
        @media only screen and (max-width: 480px) {
            display: none;
        }
    `
    const MenuItem = styled.li`
        margin-left: 30px;
        font-size: 20px;
        color: gray;
        font-weight: bold;
      
    `
    const Button = styled.button`
        border:2px solid white;
        padding: 10px 15px;
        background-color: crimson;
        color: white;
        font-weight: bold;
        border-radius: 10px;
        cursor:pointer;
    `
    return (
        <Container>
            <Wrapper >
                <Left>
                    <Logo>Agency</Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                </Left>
                <Button>Join Now</Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar