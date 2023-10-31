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
                    <img className='mb-3' src="/img/DAY6.jpg" width={400} height={300}/>
                    <h5>대표 곡 : 예뻤어</h5>
                    <h5>대표 앨범 : Every DAY6 February</h5>
                    <h5>소속사 : JYP 엔터테이먼트</h5>
                    <h5>영상 :</h5>
                    <iframe className='mt-3' width={400} height={200} src='https://www.youtube.com/embed/BS7tz2rAOSA?si=Jq2EVbvN6S88y11d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen'/>
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