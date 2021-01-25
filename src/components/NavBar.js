import { Navbar,Nav,Button } from 'react-bootstrap'
import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return(
            <div>
                <Navbar bg="white" variant="white">
                    <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Button variant="outline-primary">Search</Button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;