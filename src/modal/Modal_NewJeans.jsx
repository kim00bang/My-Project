import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modal_NewJeans = ({box,setBox}) => {
    const handleClose = () => setBox({...box,show:false});

    return (
        <>
            <Modal
                show={box.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>NewJeans</Modal.Title>
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

export default Modal_NewJeans