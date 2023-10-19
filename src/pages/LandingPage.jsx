import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigateByUrl = useNavigate()
    const navigate= ()=>{

        navigateByUrl('/home')
    }
    return (
        <>
            <Row className='mt-5 mb-5 ms-5 ps-5 align-items-center  justify-content-between'>
                <Col lg={4} >
                    <h3 mb-5>Welcome to <span className='text-warning'>Media Player</span></h3>
                    <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, vitae facere molestiae m
                        inima ea quas soluta sit fuga velit eaque impedit quibusdam quae, odio temporibus, consectetur quaerat hic voluptatem
                        perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum nesciunt odio deserunt neque architecto
                        alias debitis vitae natus, repellendus aut possimus aperiam ab placeat enim dicta veniam accusamus nostrum?

                    </p>
                    <button onClick={navigate} className="btn btn-info mt-3 mt-5  fw-bolder">Get Started</button>
                </Col>
                <Col className='ps-5' lg={8} >
                    <img className='img-fluied w-75 h-50 ms-5 align-item-center ps-5' src="https://i.gifer.com/OSOD.gif" alt="" />
                </Col>
            </Row>
            <div className='container mt-5 mb-5 d-flex justify-content-center flex-column align-items-center '>
                <h3>Features</h3>
                <div className="cards mt-5 d-flex justify-content-between w-100 align-items-center">
                    <Card className='p-3 ' style={{ width: '22rem' }}>
                        <Card.Img height={'300px'} variant="top" src="https://i.gifer.com/origin/23/23ef4d2b7c0654d56a95e100d1b30de4_w200.webp" />
                        <Card.Body>
                            <Card.Title>Managing Videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='p-3 ' style={{ width: '22rem' }}>
                        <Card.Img height={'300px'} variant="top" src="https://i.gifer.com/origin/73/739a978ca9f054bd1202e8f4d0569570_w200.webp" />
                        <Card.Body>
                            <Card.Title>Categorise Videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='p-3 ' style={{ width: '22rem' }}>
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
            <div className="container mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded align-items-center " >
                <div className="conternt w-75">
                    <h3 className='text-warning  '> Simple, Fast and Powerful</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officiis vero. Alias itaque molestiae illo rerum voluptatum voluptatibus
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe totam optio ipsam voluptates omnis illum! Illo amet repudiandae adipisci nihil, illum,
                     nesciunt, perspiciatis laboriosam distinctio voluptatum culpa officia nam ab.lore,
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugit nihil quasi consectetur deleniti, incidunt 
                     corporis cumque repellendus eveniet repudiandae quo 
                     molestiae obcaecati id velit sint magnam dolorum officiis voluptas!Lorem
                     deserunt eaque culpa? Numquam quisquam deserunt vel ea natus tempore! Corrupti, esse?
                </div>
                <div className="video border rounded ms-5 w-100"><iframe width="923" height="523" src="https://www.youtube.com/embed/AZeU5_YpqsA?autoplay=1" title="Animals x Starboy | Full Version | Aviral Kapasia | Slowed+Reverb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </div>

        </>
    )
}

export default LandingPage