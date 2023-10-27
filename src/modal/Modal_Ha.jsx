import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modal_Ha = ({box4,setBox4}) => {
    const handleClose = () => setBox4({...box4,show:false});

    return (
        <>
            <Modal
                show={box4.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>하현상</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
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

export default Modal_Ha