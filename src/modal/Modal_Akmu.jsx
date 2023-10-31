import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modal_Akmu = ({box6,setBox6}) => {
    const handleClose = () => setBox6({...box6,show:false});

    return (
        <>
            <Modal
                show={box6.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>AKMU</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='mb-3' src="/img/AKMU.jpg" width={400} height={300}/>
                    <h5>대표 곡 : 200%</h5>
                    <h5>대표 앨범 : PLAY</h5>
                    <h5>소속사 : YG엔터테이먼트</h5>
                    <h5>영상 :</h5>
                    <iframe className='mt-3' width={400} height={200} src='https://www.youtube.com/embed/0Oi8jDMvd_w?si=ENC83KLs-YIPduVB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen'/>
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

export default Modal_Akmu