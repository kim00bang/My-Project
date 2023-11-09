import './App.css';
import { Container, InputGroup, Nav, Navbar, Button, Row, Col, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import RouterPage from "./next/RouterPage";
import { GiEvilBook } from "react-icons/gi";
import { RiTreasureMapLine } from "react-icons/ri";
import { BsMusicPlayer } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

function App() {
	return (
		<div className="App">
            <Container>
                <Row>
                    <Col lg={2}>
                        <NavLink className="homepage" to="/"><AiOutlineHome size={100}/></NavLink>
                    </Col>
                    <Col lg={8}>
                        <InputGroup className='justify-content-center'>
                            <Form.Control className='search' placeholder='검색어를 입력해주세요.'/>
                            <Button variant='success'>검색</Button>
                        </InputGroup>
                    </Col>
                    <Col>
                        <NavLink>
                            <img className='mt-3' src="/img/Instagram_logo.jpg" width="40%"/>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
            <Navbar expand="lg" bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav-link">
                            <NavLink className="nav_menu" to="/book"><GiEvilBook size={80}/></NavLink>
                            <NavLink className="nav_menu mx-5" to="/local?page=1&query=카카오프렌즈"><RiTreasureMapLine size={80}/></NavLink>
                            <NavLink className="nav_menu" to="/music"><BsMusicPlayer size={80}/></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
			</Navbar>
			<RouterPage/>
		</div>
	);
}

export default App;
