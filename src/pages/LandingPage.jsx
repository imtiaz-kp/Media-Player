import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigateByUrl = useNavigate();

    const navigate = () => {
        navigateByUrl('/home');
    };

    return (
        <>
             <Row className='mt-5 mb-5 justify-content-center'>
                <Col xs={12} lg={4} className='text-center '>
                    <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
                    <p style={{ textAlign: 'justify' }}>
                        {/* Your lorem ipsum text */}
                    </p>
                    <button onClick={navigate} className="btn btn-info mt-3 mt-lg-5 fw-bolder">Get Started</button>
                </Col>
                <Col xs={12} lg={6} className='mt-4 mt-lg-0 text-center '>
                    <img className='img-fluid container' src="https://i.gifer.com/OSOD.gif" alt="" />
                </Col>
            </Row>

            <div className='container mt-5 mb-5 d-flex justify-content-center flex-column align-items-center'>
                <h3>Features</h3>
                <div className="cards mt-4 d-flex flex-wrap justify-content-around w-100 align-items-center">
                    <Card className='p-3 mb-4' style={{ width: '22rem' }}>
                        <Card.Img height={'300px'} variant="top" src="https://i.gifer.com/origin/23/23ef4d2b7c0654d56a95e100d1b30de4_w200.webp" />
                        <Card.Body>
                            <Card.Title>Managing Videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='p-3 mb-4' style={{ width: '22rem' }}>
                        <Card.Img height={'300px'} variant="top" src="https://i.gifer.com/origin/73/739a978ca9f054bd1202e8f4d0569570_w200.webp" />
                        <Card.Body>
                            <Card.Title>Categorise Videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='p-3 mb-4' style={{ width: '22rem' }}>
                        <Card.Img height={'300px'} variant="top" src="https://i.gifer.com/8RtJ.gif" />
                        <Card.Body>
                            <Card.Title>Watch History</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="container mb-5 d-flex flex-column flex-lg-row justify-content-between border p-3 p-lg-5 border-secondary rounded align-items-center">
                <div className="content text-center text-lg-left w-100">
                    <h3 className='text-warning'>Simple, Fast and Powerful</h3>
                    {/* Your lorem ipsum text */}
                </div>
                <div className="video border rounded ms-0 ms-lg-5 w-100 mt-4 mt-lg-0">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/AZeU5_YpqsA?autoplay=1"
                        title="Animals x Starboy | Full Version | Aviral Kapasia | Slowed+Reverb"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
