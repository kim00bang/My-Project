import React, { useState } from 'react'
import { Container, Nav, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Modal_NewJeans from '../modal/Modal_NewJeans';
import Modal_Choi from '../modal/Modal_Choi';
import Modal_Day6 from '../modal/Modal_Day6';
import Modal_Lucy from '../modal/Modal_Lucy';
import Modal_Ha from '../modal/Modal_Ha';
import Modal_10cm from '../modal/Modal_10cm';
import Modal_Akmu from '../modal/Modal_Akmu';
import Modal_Paul from '../modal/Modal_Paul';
import HomeBook from './HomeBook';



const Home = () => {
    const [box, setBox] = useState({ show: false });
    const [box1, setBox1] = useState({ show: false });
    const [box2, setBox2] = useState({ show: false });
    const [box3, setBox3] = useState({ show: false });
    const [box4, setBox4] = useState({ show: false });
    const [box5, setBox5] = useState({ show: false });
    const [box6, setBox6] = useState({ show: false });
    const [box7, setBox7] = useState({ show: false });
    return (
        <div>
            <Container className='mb-2'>
                <Row>
                    <Col sm={8} >
                        <Card>
                            <Card.Header>My Favorite Artist</Card.Header>
                            <Card.Body>
                                <Card border='white'>
                                    <Row>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='https://newjeans.kr/'>NewJeans</a></Card.Header>
                                                <Card.Img onClick={() => setBox({ show: true })} src="/img/NewJeans.jpg" width={155} height={155} />
                                                <Modal_NewJeans box={box} setBox={setBox} />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='http://shofar-ent.com/html/dh/artist_view?cate_no=1-20'>최유리</a></Card.Header>
                                                <Card.Img onClick={() => setBox1({ show: true })} src="/img/choi.jpg" width={155} height={155} />
                                                <Modal_Choi box1={box1} setBox1={setBox1} />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='https://day6.jype.com/'>DAY6</a></Card.Header>
                                                <Card.Img onClick={() => setBox2({ show: true })} src="/img/DAY6.jpg" width={155} height={155} />
                                                <Modal_Day6 box2={box2} setBox2={setBox2} />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='http://www.mysticstory.net/artist/lucy'>LUCY</a></Card.Header>
                                                <Card.Img onClick={() => setBox3({ show: true })} src="/img/LUCY.jpg" width={155} height={155} />
                                                <Modal_Lucy box3={box3} setBox3={setBox3} />
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='https://wake-one.com/artists/ha-hyungsang-2/'>하현상</a></Card.Header>
                                                <Card.Img onClick={() => setBox4({ show: true })} src="/img/ha.jpg" width={155} height={155} />
                                                <Modal_Ha box4={box4} setBox4={setBox4} />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='https://msbsound.com/artist/10cm/'>10CM</a></Card.Header>
                                                <Card.Img onClick={() => setBox5({ show: true })} src="/img/10CM.jpg" width={155} height={155} />
                                                <Modal_10cm box5={box5} setBox5={setBox5} />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='https://www.ygfamily.com/artist/Main.asp?LANGDIV=K&ATYPE=2&ARTIDX=52'>AKMU</a></Card.Header>
                                                <Card.Img onClick={() => setBox6({ show: true })} src="/img/AKMU.jpg" width={155} height={155} />
                                                <Modal_Akmu box6={box6} setBox6={setBox6} />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='https://www.instagram.com/paulkim.official/'>폴킴</a></Card.Header>
                                                <Card.Img onClick={() => setBox7({ show: true })} src="/img/paul.jpg" width={155} height={155} />
                                                <Modal_Paul box7={box7} setBox7={setBox7} />
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <Card.Body>로그인 하시면 또 다른 세상이 펼쳐집니다.</Card.Body>
                            <NavLink className="home_login mx-2" to="/user/login">로그인</NavLink>
                            <NavLink className='mt-3 mb-3' to="/user/insert">회원가입</NavLink>
                        </Card>
                        <Card className='mt-2'>
                            <Card.Header>날씨</Card.Header>
                            <Card.Body></Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Book</Card.Header>
                            <Card>
                                <HomeBook />
                            </Card>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Header>노래</Card.Header>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;