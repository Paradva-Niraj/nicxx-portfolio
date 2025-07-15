import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import {Bio} from "../data/constants"

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  text-decoration: none;
  font-weight: bold;
  padding:0 6px;
  color:inherit;

`;

const NavItems = styled.ul`
width:100%;
display:flex;
align-item:center;
justify-content:center;
gap:32px;
list-style:none;
@media Screen and (max-width:768px){
        display:none;
    }
`

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight:500;
  cursor:pointer;
  transaction:all 0.2 ease-in-out;
  text-decoration:none;
  &:hover{
  color: ${({theme})=>theme.primary};
  }

`
const ButtonContainer = styled.div`
    height:100%;
    display:flex;
    justify-content:end;
    aligh-items:center;
    padding:0 6px;
    @media Screen and (max-width:768px){
        display:none;
    }
`

const GitButton = styled.a`
border:1px solid ${({theme})=>theme.primary};
color: ${({theme})=>theme.primary};
display:flex;
justify-content:center;
align-items:center;
border-radius:20px;
cursor:pointer;
padding:10px 20px;
font-size:16px;
text-decoration:none;
font-weight:500;
&:hover{
background-color:${({theme})=>theme.primary};
color:${({theme})=>theme.text_primary}
}
`

const Navbar = () => {
  return (
    <Nav>
    <NavbarContainer>
      <NavLogo to="/">Nicxx</NavLogo>
      <NavItems>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#education">Education</NavLink>
      </NavItems>

      <ButtonContainer>
        <GitButton href={Bio.github} target="_blank">GitHubProfile</GitButton>
      </ButtonContainer>
    </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
