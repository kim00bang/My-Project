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
                    <img className='mb-3' src="/img/NewJeans.jpg" width={400} height={300}/>
                    <h5>대표 곡 : Attention</h5>
                    <h5>대표 앨범 : NewJeans 1st EP 'New Jeans'</h5>
                    <h5>소속사 : ADOR</h5>
                    <h5>영상 :</h5>
                    <iframe className='mt-3' width={400} height={200} src='https://www.youtube.com/embed/js1CtxSY38I?si=urO45v6gokF0Iagp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen'/>
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