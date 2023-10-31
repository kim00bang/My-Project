import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modal_Choi = ({box1, setBox1}) => {
    const handleClose = () => setBox1({...box1,show:false});

    return (
        <>
            <Modal
                show={box1.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>최유리</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='mb-3' src="/img/최유리.jpg" width={400} height={300}/>
                    <h5>대표 곡 : 바람</h5>
                    <h5>대표 앨범 : 갯마을 차차차 OST part.4</h5>
                    <h5>소속사 : 쇼파르 엔터테이먼트</h5>
                    <h5>영상 :</h5>
                    <iframe className='mt-3' width={400} height={200} src='https://www.youtube.com/embed/WYThj_FVq3w?si=0BjDmPS4LEUEPXD9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen'/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                    닫기
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modal_Choi