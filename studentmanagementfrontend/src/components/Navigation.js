import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import logo from '../static/logo.png';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import "../App.css";
import { NavLink } from 'react-router-dom';



function Navigation() {
    return (
        <>
            <div>
                <Navbar className="bg-dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src={logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                            />{' '}
                            Student Management System
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
            <div className='sidebar'>
                <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                            <NavLink exact to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/students" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="list">Students List</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/manage" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user" iconType="solid">
                                    Manage Students
                                </CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        </>
    )
}

export default Navigation