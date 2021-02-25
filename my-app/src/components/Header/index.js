import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from '../../img/Logo_Klika.svg';
import { FaGithub } from 'react-icons/fa';
import './style.css';

// This is static top section of the page and gives it semantic value.
function Header() {
    return (
        <header className="bg--image">
            <Container>
                <Navbar className="justify-content-between">
                    <Navbar.Brand>
                        <img src={Logo} alt="Klika Logo" style={{width: "14rem"}} />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="https://github.com/yoni-g/digibit-employee-directory" target="_Blank"><FaGithub className="github-icon" /></Nav.Link>
                    </Nav>

                </Navbar>
                <h1 className="text-center text-color">חברי קליקה</h1>
            </Container>
        </header>
    )
}


export default Header;