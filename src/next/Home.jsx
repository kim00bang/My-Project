import React from 'react'
import { Container, Nav, Navbar, Image, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <input className='search' type="search" placeholder='검색어를 입력해주세요.' />
            <button className='btn-search'>검색</button>
                <Navbar expand="lg" bg="light" data-bs-theme="light">
                    <Container>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav-link">
                            <Nav.Link href="#home"><Image src="" rounded /></Nav.Link>
                            <Nav.Link href="#link">쇼핑</Nav.Link>
                            <Nav.Link href="#link">지도</Nav.Link>
                            <Nav.Link href="#link">노래</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    );
}

export default Home;