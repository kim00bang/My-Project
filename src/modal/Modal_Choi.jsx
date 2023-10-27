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