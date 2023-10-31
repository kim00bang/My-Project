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
                    <img className='mb-3' src="/img/ha.jpg" width={400} height={300}/>
                    <h5>대표 곡 : 불꽃놀이</h5>
                    <h5>대표 앨범 : 불꽃놀이</h5>
                    <h5>소속사 : WAKEONE</h5>
                    <h5>영상 :</h5>
                    <iframe className='mt-3' width={400} height={200} src='https://www.youtube.com/embed/yl0HP_OeUF4?si=q2d-1nUw7i8px4-L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen'/>
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