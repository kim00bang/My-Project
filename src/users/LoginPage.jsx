import React from 'react'
import { Card, Row, Col, InputGroup, Form, Button } from 'react-bootstrap'
import { BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='my-5'>
            <h1 className='mb-5 hello'>Hello! New World!</h1>
            <Row lg={4} className='justify-content-center'>
                <Col>
                    <Card>
                        <InputGroup>
                            <InputGroup.Text><BsPerson/></InputGroup.Text>
                            <Form.Control placeholder='아이디'/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text><RiLockPasswordLine/></InputGroup.Text>
                            <Form.Control type='password' placeholder='비밀번호'/>
                        </InputGroup>
                        <button className='mx-2 mb-2 color'>로그인</button>
                    </Card>
                    <NavLink ><div className='mt-3 login'>회원가입</div></NavLink>
                </Col>
            </Row>
        </div>
    )
}

export default LoginPage