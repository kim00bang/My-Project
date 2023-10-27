import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modal_10cm = ({box5,setBox5}) => {
    const handleClose = () => setBox5({...box5,show:false});

    return (
        <>
            <Modal
                show={box5.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>10CM</Modal.Title>
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

export default Modal_10cm