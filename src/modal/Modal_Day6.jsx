import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modal_Day6 = ({box2,setBox2}) => {
    const handleClose = () => setBox2({...box2,show:false});

    return (
        <>
            <Modal
                show={box2.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>DAY6</Modal.Title>
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

export default Modal_Day6