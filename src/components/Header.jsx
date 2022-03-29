import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSteamSquare } from "@fortawesome/free-brands-svg-icons"
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import HomeIcon from '../components/HomeIcon';
import SteamLogoAndIcons from './SteamLogoAndIcons';

const Header = () => {
    return (
        <>
            <SteamLogoAndIcons></SteamLogoAndIcons>
            <br /><br />
            <Navbar bg='light' expand='lg' style={{ display: "flex", margin: 0, padding: 0 }}>
                <Container style={{ display: "flex", margin: 0, padding: 0 }}>
                    <Navbar.Brand style={{ margin: 0 }}>
                        <a href="https://store.steampowered.com/?l=spanish"><HomeIcon /></a>
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto" style={{display: "flex"}}>
                            <Nav.Link href="#historia" style={{ color: "white", marginLeft: 100, fontSize: 30 }}>TIENDA</Nav.Link>
                            <Nav.Link href="#trasfondo" style={{ color: "white", marginLeft: 20, fontSize: 30 }}>BIBLIOTECA</Nav.Link>
                            <Nav.Link href="#personajes" style={{ color: "white", marginLeft: 20, fontSize: 30 }}>COMUNIDAD</Nav.Link>
                            <Nav.Link href="#personajes" style={{ color: "white", marginLeft: 20, fontSize: 30 }}>@USER</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>


    )
}

export default Header

