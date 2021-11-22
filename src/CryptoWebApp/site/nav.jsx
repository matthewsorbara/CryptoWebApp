import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'

export default class Navigation extends React.Component {


    render() {

        const headerStyles = {
            color: "white",
            display: "inline-flex",
            margin: "10px",
            textDecoration: 'none',
            justifyContent: 'space-around'
        }

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fontnav" href="#home">Crypto Web App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link className="fontnav" href="#deets">Home</Nav.Link>
                            <Nav.Link className="fontnav" href="#deets">Charts</Nav.Link>
                            <Nav.Link className="fontnav" href="#deets">Trading Bot</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        )
    }

}