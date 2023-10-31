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
                    <img className='mb-3' src="/img/10CM.jpg" width={400} height={300}/>
                    <h5>대표 곡 : 아메리카노</h5>
                    <h5>대표 앨범 : 아메리카노</h5>
                    <h5>소속사 : 매직 스트로 베리 사운드</h5>
                    <h5>영상 :</h5>
                    <iframe className='mt-3' width={400} height={200} src='https://www.youtube.com/embed/OmJYbdRfDNQ?si=3tj29TOMOSzRcqQG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen'/>
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