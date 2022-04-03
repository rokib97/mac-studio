import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="navbar">
          <NavLink to="/" className="fw-bold link-left">
            Mac Studio
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/reviews"
              >
                Reviews
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/about"
              >
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;