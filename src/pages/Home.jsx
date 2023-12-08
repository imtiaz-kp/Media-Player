import React, { useState } from 'react';
import Add from '../components/Add';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import View from '../components/View';
import Category from '../components/Category';

function Home() {
    const [uploadVideoServerResponse, setUploadVideoServerResponse] = useState({});
    const scrollToSection = () => {
        const section = document.getElementById('Category');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='container mt-5 mb-5 d-flex flex-column flex-md-row align-items-center justify-content-between'>
                <div className='mb-3 mb-md-0'><Add setUploadVideoServerResponse={setUploadVideoServerResponse} /></div>
                <Link to={'/watch-history'} style={{ textDecoration: 'none', color: 'none' }} className='fs-5 mt-3 mt-md-0'>Watch History</Link>
                <Link  style={{ textDecoration: 'none', color: 'none' }} className='fs-5 mt-3 mt-md-0'><div  style={{ textDecoration: 'none', color: 'none' }}  onClick={scrollToSection}>Add Category</div></Link>
            </div>
            <Row className="container-fluid m-3 ">
                <Col xs={12} lg={12} className='all-videos'>
                    <h3 className='mb-4'>All Videos</h3>
                    <div className='videos w-100'>
                        <View uploadVideoServerResponse={uploadVideoServerResponse} />
                    </div>
                </Col>
            </Row>
            <Row className="container-fluid m-3 me-5" id="Category">

                <Col xs={12} lg={12} className='category  '>
                    <Category  />
                </Col>
            </Row>

        </>
    );
}

export default Home;
