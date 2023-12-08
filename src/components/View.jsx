import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoCard from './VideoCard';
import { getAllVideos } from './services/allAPI';

function View({ uploadVideoServerResponse }) {
  const [deleteVideosStatus, setDeleteVideosStatus] = useState(false);
  const [allVideos, setAllVideos] = useState([]);

  const getAllUploadedVideo = async () => {
    // make api call
    const { data } = await getAllVideos();
    setAllVideos(data);
  };

  useEffect(() => {
    setDeleteVideosStatus(false);
    getAllUploadedVideo();
  }, [uploadVideoServerResponse, deleteVideosStatus]);

  return (
    <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={4} className='me-2'>
      {allVideos?.length > 0 ? (
        allVideos?.map((video) => (
          <Col key={video.id} className="mb-4">
            <VideoCard displayData={video} setDeleteVideosStatus={setDeleteVideosStatus} />
          </Col>
        ))
      ) : (
        <p className="fw-bolder mt-3 fs-5 text-danger">Nothing to display</p>
      )}
    </Row>
  );
}

export default View;
