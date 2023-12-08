import React, { useEffect } from 'react';
import { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateCategory, deleteCategory, getAVideo, getAllCategory, saveCategory } from './services/allAPI';
import VideoCard from './VideoCard';

function Category() {
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handilCategory = async () => {
    if (categoryName) {
      //make api call 
      const body = {
        categoryName,
        allVideos: []
      };
      const response = await saveCategory(body);
      if (response.status >= 200 && response.status < 300) {
        //hide modal 
        handleClose();
        //reset state
        setCategoryName("");
        handleGetCategory();
      }
    } else {
      toast.info("Uploading Error. Perform the operation after some time.");
    }
  };

  const handleGetCategory = async () => {
    const { data } = await getAllCategory();
    setAllCategory(data);
  };

  const handleDeleteCategory = async (id) => {
    //make api call
    await deleteCategory(id);
    //get all category
    handleGetCategory();
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDropped = async (e, categoryId) => {
    const videoCardId = e.dataTransfer.getData("cardId");
    console.log("Video Card id" + videoCardId);
    //get details of video to be dropped 
    const { data } = await getAVideo(videoCardId);
    
    //get details category 
    const selectedCategory = allCategory.find(item => item.id === categoryId);
    selectedCategory.allVideos.push(data);
    await UpdateCategory(categoryId, selectedCategory);
    handleGetCategory();
  };

  useEffect(() => {
    handleGetCategory();
  }, []);

  return (
    <>
      <div className="text-center  me-5">
      <div><button onClick={handleShow} className='btn btn-info w-50'  onMouseOver={handleHover}
        onMouseLeave={handleMouseLeave}>Add Now Category</button>
         {isHovered && <p className='mt-3'>Drag and drop videos to category  </p>}
    </div>
      </div>

      {allCategory?.length > 0 ? allCategory?.map(item => (
        <div className="border rounded p-3 mt-3 me-5 mb-3 w-100" droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDropped(e, item?.id)}>
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <h6 className='mt-2 me-2'>{item?.categoryName}</h6>
            <button className='btn' onClick={() => handleDeleteCategory(item?.id)}><i className='fa-solid fa-trash text-danger mb-2'></i> </button>
          </div>
          {item?.allVideos &&
            <Row className='d-flex' >
              {item?.allVideos?.map(card => (
                <Col sm={12} lg={2} key={card.id}>
                  <VideoCard displayData={card} insideCtegory={true} />
                </Col>
              ))}
            </Row>
          }
        </div>
      )) : <p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display</p>}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Category Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="btn btn-info" onClick={handilCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  );
}

export default Category;
