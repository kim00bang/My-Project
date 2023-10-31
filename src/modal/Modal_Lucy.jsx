import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modal_Lucy = ({box3,setBox3}) => {
    const handleClose = () => setBox3({...box3,show:false});

    return (
        <>
            <Modal
                show={box3.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>LUCY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='mb-3' src="/img/LUCY.jpg" width={400} height={300}/>
                    <h5>대표 곡 : 아니 근데 진짜</h5>
                    <h5>대표 앨범 : INSERT COIN</h5>
                    <h5>소속사 : 미스틱 스토리</h5>
                    <h5>영상 :</h5>
                    <iframe className='mt-3' width={400} height={200} src='https://www.youtube.com/embed/3qtrJHLjfEI?si=l6alhU4TFufZ9GxW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen'/>
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

export default Modal_Lucy