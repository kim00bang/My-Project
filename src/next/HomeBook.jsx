import React, { useEffect, useState } from 'react'
import { Card, CardGroup, Image, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const HomeBook = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("백종원");
    const location = useLocation();
    const search = new URLSearchParams(location.search);

    const getBooks = async () => {
        const url = `https://dapi.kakao.com/v3/search/book?target=title&query=${query}&size=15`;
        const config = {
            headers: {
                "Authorization": "KakaoAK 101f7a17f872e02b2ae8da8a87b16c1c"
            }
        }
        const res = await axios.get(url, config);
        //console.log(res);
        setBooks(res.data.documents);
    }

    useEffect(() => {
        getBooks();
    }, [])

    return (
        <div>
            <Row>
                {books.map(book =>
                    <Col xs={6} md={4} lg={2} className='mt-3 mb-2 mx-2'>
                        <Card>
                            <img src={book.thumbnail || "http://via.placeholder.com/100x100"} width="100%" />
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    )
}

export default HomeBook