import './App.css';
import { Container, InputGroup, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import RouterPage from "./next/RouterPage";


function App() {
	return (
		<div className="App">
            <Container>
                <Row>
                    <Col>
                        <div>홈페이지</div>
                    </Col>
                    <Col>
                        <InputGroup className='justify-content-center'>
                            <input className='search' type="search" placeholder='검색어를 입력해주세요.' />
                            <Button className='btn-search' variant='success'>검색</Button>
                        </InputGroup>
                    </Col>
                    <Col>
                        <NavLink>
                            <img src="/img/Instagram_logo.jpg" width={50}/>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
            
			
            <Navbar expand="lg" bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav-link">
                            <NavLink className="nav_menu" to="/book">도서</NavLink>
                            <NavLink className="nav_menu mx-5" to="/local">지도</NavLink>
                            <NavLink className="nav_menu" to="/music">노래</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
			</Navbar>
			<RouterPage/>
		</div>
	);
}

export default App;
