import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { Bio } from "../data/constants"
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';

const Nav = styled.div`
  background-color:#0909177e;
  height: 80px;
  display: flex;
  backdrop-filter: blur(7px);
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
  position: relative
`;

const NavLogo = styled(LinkR)`
  text-decoration: none;
  font-weight: bold;
  padding:0 6px;
  color:inherit;
  font-width:500;
  font-size:18px;
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
  color: ${({ theme }) => theme.primary};
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
border:1px solid ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.primary};
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
background-color:${({ theme }) => theme.primary};
color:${({ theme }) => theme.text_primary};
}
`

const MobileIcon = styled.div`
 color:${({ theme }) => theme.text_primary};
 height:100%;
 display:flex;
 align-item:center;
 display:none;
 @media Screen and (max-width:768px){
        display:block;
    }
 `

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  list-style: none;
  width: 70%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 40px;
  right:3%;
  transition: all 0.6s ease-in-out;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: ${({ isOpen }) => isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => isOpen ? "1" : "0"};
  z-index: ${({ isOpen }) => isOpen ? "1000" : "-1000"};
  @media Screen and (min-width:768px){
        display:none;
    }
`;

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Nicxx</NavLogo>

        <MobileIcon>
          <MenuOpenRoundedIcon style={{ color: "inherit" }} onClick={() => { setIsOpen(!isOpen) }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        {
          isOpen && <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)}  href="#about">About</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)}  href="#Skills">Skills</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)}  href="#projects">Projects</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)}  href="#education">Education</NavLink>
            <GitButton
              href={Bio.github}
              target="_blank"
              style={{
                background: "#854CE6",
                color: "#ffffffff",
              }}
            >
              GitHubProfile
            </GitButton>
          </MobileMenu>
        }
        <ButtonContainer>
          <GitButton href={Bio.github} target="_blank">GitHubProfile</GitButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
