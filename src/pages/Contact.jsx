import { faEnvelope, faLocationDot, faPhone, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Contact() {
    return (
        <div className='contact'>

            {/* <Banner title='Contact' /> */}

            {/* <div style={{ height: 50 }} ></div> */}

            <div className="section1">
                <div className="container">

                    <br />
                    <div className="row">
                        <div className="col d-flex align-items-center" style={{ height: 80, borderLeft: '1px solid #282828' }} >

                            <div className="h3 fw-bold m-0 ps-4" >
                                Contact Info
                            </div>

                        </div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828' }} ></div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828', borderRight: '1px solid #282828' }} ></div>
                    </div>
                    <div className="row">
                        <div className="col-5" style={{ height: 200, border: '1px solid #282828' }} >
                            <div className="d-flex gap-2 h-100 align-items-center justify-content-center flex-column">
                                <FontAwesomeIcon size='3x' style={{ color: "#4bffa5" }} icon={faPhone} />
                                <div className="h5 fw-bold">Phone</div>
                                <div className="h6 text-secondary">
                                    <a href="tel:9798843855"
                                        className='text-secondary'
                                        style={{ textDecoration: 'none' }}>
                                        +91 9798843855
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2" style={{ height: 200, }} ></div>
                        <div className="col-5" style={{ height: 200, border: '1px solid #282828', borderRight: '1px solid #282828' }} >
                            <div className="d-flex gap-2 h-100 align-items-center justify-content-center flex-column">
                                <FontAwesomeIcon size='3x' style={{ color: "#4bffa5" }} icon={faEnvelope} />
                                <div className="h5 fw-bold">Email</div>
                                <div className="h6 text-secondary">
                                    <a href="mailto:sk.jaiswal1729@gmail.com "
                                        className='text-secondary'
                                        style={{ textDecoration: 'none' }}>
                                        sk.jaiswal1729@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828' }} ></div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828' }} ></div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828', borderRight: '1px solid #282828' }} ></div>
                    </div>
                    <div className="row">
                        <div className="col-5" style={{ height: 200, border: '1px solid #282828' }} >
                            <div className="d-flex gap-2 h-100 align-items-center justify-content-center flex-column">
                                <FontAwesomeIcon size='3x' style={{ color: "#4bffa5" }} icon={faLocationDot} />
                                <div className="h5 fw-bold">Location</div>
                                <div className="h6 text-secondary">
                                    <a href="https://goo.gl/maps/CH97LVezfdDtx7kj6"
                                        className='text-secondary'
                                        target={'_blank'}
                                        rel="noreferrer"
                                        style={{ textDecoration: 'none' }}>
                                        IIT Indore, Simrol, Madhya Pradesh 452020
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2" style={{ height: 200, }} ></div>
                        <div className="col-5" style={{ height: 200, border: '1px solid #282828', borderRight: '1px solid #282828' }} >
                            <div className="d-flex gap-2 h-100 align-items-center justify-content-center flex-column">
                                <FontAwesomeIcon size='3x' style={{ color: "#4bffa5" }} icon={faUserTie} />
                                <div className="h5 fw-bold">Freelance</div>
                                <div className="h6 text-secondary">
                                    <a href="https://www.fiverr.com/users/suman_jaiswal/seller_dashboard"
                                        className='text-secondary'
                                        target={'_blank'}
                                        rel="noreferrer"
                                        style={{ textDecoration: 'none' }}>
                                        I am available for freelance work.
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828' }} ></div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828' }} ></div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828', borderRight: '1px solid #282828' }} ></div>
                    </div>
                    <div className="row">
                        <div className="col d-flex align-items-center" style={{ height: 80, borderLeft: '1px solid #282828' }} >

                            <div className="h3 fw-bold m-0 ps-4" >
                                Contact Form
                            </div>

                        </div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828' }} ></div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828', borderRight: '1px solid #282828' }} ></div>
                    </div>
                    <div className="row" style={{ border: '1px solid #282828' }}>
                        <form >
                            <div className="col-12 px-4">
                                <input
                                    placeholder='Name'
                                    type="text" className='mt-4' style={{
                                        background: "#101010", border: 'none', borderBottom: '1px solid #282828', width: "100%", height: 50,
                                        color: 'white', outline: 'none', fontSize: 20
                                    }} />
                            </div>
                            <div className="col-12 px-4">
                                <input
                                    placeholder='Email'
                                    type="text" className='mt-4' style={{
                                        background: "#101010", border: 'none', borderBottom: '1px solid #282828', width: "100%", height: 50,
                                        color: 'white', outline: 'none', fontSize: 20
                                    }} />
                            </div>
                            <div className="col-12 px-4">
                                <textarea
                                    rows={10} cols={10}
                                    placeholder='Message'
                                    type="text" className='mt-4' style={{
                                        background: "#101010", border: 'none', borderBottom: '1px solid #282828', width: "100%", height: 80,
                                        color: 'white', outline: 'none', fontSize: 20
                                    }} />
                            </div>
                            <div className="col-12 px-4">
                                <button
                                    type="submit"
                                    className='my-4' style={{
                                        background: "transparent", border: '2px solid #4bffa5', width: "15%", height: 40,
                                        color: '#4bffa5', outline: 'none',
                                    }}>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828' }} ></div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828' }} ></div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828', borderRight: '1px solid #282828' }} ></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
