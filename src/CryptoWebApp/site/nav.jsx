import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <Navbar.Brand href="#home">Crypto Web App w/ Binance API</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">BTC</Nav.Link>
                            <Nav.Link href="#deets">ETH</Nav.Link>
                            <Nav.Link href="#deets">XRP</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        )
    }

}