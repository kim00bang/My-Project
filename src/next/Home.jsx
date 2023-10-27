import React from 'react'
import { Container, Nav, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css';
import Modal_NewJeans from '../modal/Modal_NewJeans';


const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8} >
                        <Card>
                            <Card.Header>My</Card.Header>
                            <Card.Body>
                                <Card border='white'>
                                    <Row>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='https://newjeans.kr/'>NewJeans</a></Card.Header>
                                                <Card.Img src="/img/NewJeans.jpg" width={155} height={155}/>
                                                <Modal_NewJeans/>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='http://shofar-ent.com/html/dh/artist_view?cate_no=1-20'>최유리</a></Card.Header>
                                                <Card.Img src="/img/최유리.jpg" width={155} height={155}/>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='https://day6.jype.com/'>DAY6</a></Card.Header>
                                                <Card.Img src="/img/DAY6.jpg" width={155} height={155}/>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='http://www.mysticstory.net/artist/lucy'>LUCY</a></Card.Header>
                                                <Card.Img src="/img/LUCY.jpg" width={155} height={155} />
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='https://wake-one.com/artists/ha-hyungsang-2/'>하현상</a></Card.Header>
                                                <Card.Img src="/img/하현상.jpg" width={155} height={155} />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='https://msbsound.com/artist/10cm/'>10CM</a></Card.Header>
                                                <Card.Img src="/img/10CM.jpg" width={155} height={155} />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='https://www.ygfamily.com/artist/Main.asp?LANGDIV=K&ATYPE=2&ARTIDX=52'>AKMU</a></Card.Header>
                                                <Card.Img src="/img/AKMU.jpg" width={155} height={155} />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header><a className='black' href='https://www.instagram.com/paulkim.official/'>폴킴</a></Card.Header>
                                                <Card.Img src="/img/폴킴.jpg" width={155} height={155} />
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
                            <Button variant='success'>로그인</Button>
                            <Nav.Link className='mt-3 mb-3'>회원가입</Nav.Link>
                        </Card>
                        <Card>
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
                            <Row className='mt-2'>
                                <Col>
                                    <Card>
                                        <Card.Img src='https://via.placeholder.com/100x100' width={100} height={100}/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img src='https://via.placeholder.com/100x100' width={100} height={100}/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img src='https://via.placeholder.com/100x100' width={100} height={100}/>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col>
                                    <Card>
                                        <Card.Img src='https://via.placeholder.com/100x100' width={100} height={100}/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img src='https://via.placeholder.com/100x100' width={100} height={100}/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img src='https://via.placeholder.com/100x100' width={100} height={100}/>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col>
                                    <Card>
                                        <Card.Img src='https://via.placeholder.com/100x100' width={100} height={100}/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img src='https://via.placeholder.com/100x100' width={100} height={100}/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img src='https://via.placeholder.com/100x100' width={100} height={100}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Header>Local</Card.Header>
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