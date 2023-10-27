import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modal_Paul = ({box7,setBox7}) => {
    const handleClose = () => setBox7({...box7,show:false});

    return (
        <>
            <Modal
                show={box7.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>폴킴</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>대표 곡 : </h5>
                    <h5>대표 앨범 : </h5>
                    <h5>소속사 : </h5>
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

export default Modal_Paul