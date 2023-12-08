import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteAVideo } from './services/allAPI';

function VideoCard({ displayData, setDeleteVideosStatus, insideCtegory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //get caption and link
    const { caption, embedlink } = displayData;
    //generate timestamp
    let today = new Date();
    const timeiStamp = new Intl.DateTimeFormat("en-US", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today);
    let reqBody = {
      caption, embedlink, timeiStamp
    };
    //make api call
    await addHistory(reqBody);
  }
  //deleting video
  const removeVideo = async (id) => {
    //make api call
    const response = await deleteAVideo(id);
    setDeleteVideosStatus(true);
  }
  const dragStarted = (e, id) => {
    console.log("Drag started");
    e.dataTransfer.setData("cardId", id);
  }
  return (
    <>
      {displayData &&
        <Card className='mb-3' draggable onDragStart={(e) => dragStarted(e, displayData?.id)}>
          <Card.Img onClick={handleShow} style={{ height: '200px' }} className='w-100' variant="top" src={displayData?.url} />
          <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-center'>
              <h6> {displayData?.caption}</h6>
              {insideCtegory ? "" :
                <button onClick={() => removeVideo(displayData.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
              }
            </Card.Title>
          </Card.Body>
        </Card>}
      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={"100%"} height={"400px"} src={`${displayData?.embedlink}?autoplay=1`} title={`${displayData?.caption}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard;
