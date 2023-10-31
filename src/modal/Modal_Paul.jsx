import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modal_Paul = ({box7,setBox7}) => {
    const handleClose = () => setBox7({...box7,show:false});

    return (
        <>
            <Modal
                show={box7.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>폴킴</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='mb-3' src="/img/폴킴.jpg" width={400} height={300}/>    
                    <h5>대표 곡 : 초록빛</h5>
                    <h5>대표 앨범 : 초록빛</h5>
                    <h5>소속사 : 와이예스 엔터테인먼트</h5>
                    <h5>영상 :</h5>
                    <iframe className='mt-3' width={400} height={200} src='https://www.youtube.com/embed/NAi690rUpMk?si=aiKELr17SfK2N6Ta" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen'/>
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

export default Modal_Paul