import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Table, Spinner, Button, InputGroup, Form, Row, Col } from 'react-bootstrap';
import LocalModal from '../next/LocalModal';

const Local = () => {
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    const navi = useNavigate();
    let page = useState(search.get("page")) ? parseInt(search.get("page")) :1;
    
    const [locals, setLocals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [end, setEnd] = useState(false);
    const [query, setQuery] = useState(search.get("query"))
    const getLocal = async () => {
        const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}&size=10&page=${page}`;
        const config = {
            headers: {
                "Authorization": "KakaoAK 101f7a17f872e02b2ae8da8a87b16c1c"
            }
        }
        setLoading(true);
        const res = await axios.get(url, config);
        setLocals(res.data.documents);
        setTotal(res.data.meta.pageable_count);
        setEnd(res.data.meta.is_end);
        setLoading(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        navi(`/local?page=1&query=${query}`);
    }

    useEffect(() => {
        getLocal();
    }, [location]);

    return (
        <div className='my-5'>
            <h1 className='text-center'>지역 검색</h1>
            {loading ?
                <div>
                    <h1>로딩중...</h1>
                    <Spinner variant='dark' />
                </div>
                :
                <>
                    <div>
                        <Row>
                            <Col>
                                <form onSubmit={onSubmit}>
                                    <InputGroup>
                                        <Form.Control onChange={(e) => setQuery(e.target.value)} value={query} />
                                        <Button variant='success' type='submit'>검색</Button>
                                    </InputGroup>
                                </form>
                            </Col>
                            <Col>
                                검색수 : {total}건
                            </Col>
                        </Row>
                    </div>
                    <Table hover striped bordered variant='success'>
                        <thead>
                            <tr>
                                <th>지역명</th>
                                <th>주소</th>
                                <th>전화번호</th>
                                <th>지역정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            {locals.map(local =>
                                <tr key={local.id}>
                                    <td>{local.place_name}</td>
                                    <td>{local.address_name}</td>
                                    <td>{local.phone}</td>
                                    <td><LocalModal local={local} /></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <div>
                        <Button onClick={() => navi(`/local?page=${page - 1}&query=${query}`)} variant='success' disabled={page === 1}>이전</Button>
                        <span className='mx-3'>{page}/{Math.ceil(total / 5)}</span>
                        <Button onClick={() => navi(`/local?page=${page + 1}&query=${query}`)} variant='success' disabled={end}>다음</Button>
                    </div>
                </>
            }
        </div>
    )
}

export default Local;