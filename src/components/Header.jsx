import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSteamSquare } from "@fortawesome/free-brands-svg-icons"
import { Navbar } from 'react-bootstrap';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import HomeIcon from '../components/HomeIcon';
import SteamLogoAndIcons from './SteamLogoAndIcons';

const Header = () => {
    return (
        <div style={{ backgroundColor: "#07065e" }}>
            <SteamLogoAndIcons></SteamLogoAndIcons>
            <br /><br />
            <Navbar bg='light' expand='lg' style={{ display: "flex", margin: 0, padding: 0, }}>
                <Container style={{ display: "flex", margin: 0, padding: 0 }}>
                    <Navbar.Brand style={{ margin: 0 }}>
                        <a href="https://store.steampowered.com/?l=spanish"><HomeIcon/></a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto" style={{ display: "flex" }}>
                            <NavDropdown title="TIENDA" id="basic-nav-dropdown" style={{fontSize: 20}}>
                                <NavDropdown.Item href="#action/3.1">Destacados</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Lista de Descubrimientos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Lista de Deseados</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Tienda de Puntos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Noticias</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Estadisticas</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="BIBLIOTECA" id="basic-nav-dropdown" style={{fontSize: 20}}>
                                <NavDropdown.Item href="#action/3.1">Pagina de Inicio</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Colecciones</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Descargas</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="COMUNIDAD" id="basic-nav-dropdown" style={{fontSize: 20}}>
                                <NavDropdown.Item href="#action/3.1">Inicio</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Discusiones</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Workshops</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Mercado</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Retransmisiones</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" style={{fontSize: 20 }}>@USER</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>


    )
}

export default Header

