import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div style={{ width: '100%', height: '300px' }} className='d-flex justify-content-center align-items-center flex-column'>
            <div className="footr-conternt d-flex justify-content-evenly w-100 flex-wrap">
                <div className="website" style={{ width: '400px' }}>
                    <h4><i className="fa-solid fa-cloud-arrow-up "></i>{' '}Media Player</h4>
                    <h6>Designed and built with all the love in the world by the "MI" team with the help of our contributors.</h6>
                    <h6>Code licensed MIT, docs CC BY 3.0.</h6>
                    <p>Currently v5.3.2</p>
                    </div>
                <div className="links d-flex flex-column" >
                    <h4>Links</h4>
                    <Link to={'/'} style={{ textDecoration: 'none', }}>Landing page</Link>
                    <Link to={'/home'} style={{ textDecoration: 'none'}}>Home page</Link>
                    <Link to={'/watch-history'} style={{ textDecoration: 'none',}}>Watch-history</Link>
                </div>
                <div className="guides d-flex flex-column"> <h4>Guides</h4>
                    <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none'}}>React</Link>
                    <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none' }}>React Bootstrap</Link>
                    <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none' }}>Routing</Link></div>
                <div className="contact d-flex flex-column flex-wrap p-4">
                    <h4>Contact us</h4>
                    <div className='d-flex' >
                    <input className='form-control ' placeholder='enter your mail'></input>
                    <button className="btn btn-info   ms-1" style={{width:'150px'}}>Subscribe</button>
                    </div>

                    <div className='icons mt-3 d-flex justify-content-evenly fs-4'>
                        <Link to={'/'} style={{ textDecoration: 'none'  }}><i className="fa-brands fa-facebook"></i></Link>
                        <Link to={'/'} style={{ textDecoration: 'none' }}><i className="fa-brands fa-instagram"></i></Link>
                        <Link to={'/'} style={{ textDecoration: 'none'}}><i className="fa-brands fa-twitter"></i></Link>
                        <Link to={'/'} style={{ textDecoration: 'none'}}><i className="fa-solid fa-envelope"></i></Link>

                    </div>
                </div>
            </div>
            <p>copyright  2023 Media Player. Build with React.</p>

        </div>
    )
}

export default Footer