import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const Header: React.SFC<{}> = () => {
    return (
        <Navbar>
            <Nav>
                <LinkContainer to="/" exact={true}>
                    <NavItem>ToDos</NavItem>
                </LinkContainer>
                <LinkContainer to="/hello">
                    <NavItem>Hello</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
}