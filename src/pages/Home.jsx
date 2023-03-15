import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Home() {
    return (
        <div className='home'>
            <div className="section0" style={{
                height: '100vh',
                width: '100%',
                background: 'url(bg.avif) no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className="sec0-top h-75 d-flex" style={{
                    padding: '0 8rem ',
                }}>
                    <div className="img" style={{
                        backgroundImage: 'url(profile.jpg)',
                        backgroundSize: 'cover',
                        clipPath: 'polygon(30% 0, 100% 10%, 85% 100%, 0 100%)',
                        width: '60%',
                        backgroundPosition: 'center',
                    }}>
                        <div style={{
                            background: 'linear-gradient(to right,rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, rgba(10,10,10,0.5) 100%)',
                            clipPath: 'polygon(30% 0, 100% 10%, 85% 100%, 0 100%)',
                            width: '100%',
                            height: '100%',
                        }}>
                        </div>
                    </div>
                    <div className=" p-5 d-flex mt-auto" style={{
                        width: '40%',
                    }}>
                        <p className='lead' >
                            Hello There! I am <b style={{ color: "#4bffa5", fontWeight: 'bold' }}>Suman Jaiswal</b>, a Full Stack Web Developer from India.
                        </p>
                    </div>
                </div>

                <div className="sec0-bottom h-25 p-5">
                    <div className="h-100 row py-auto">
                        <div className="col-2 h-100 gap-2 p-0 d-flex flex-column justify-content-end">
                            <a href='mailto:sk.jaiswal1729@gmail.com' className='' style={{ fontSize: 14 }}>
                                <FontAwesomeIcon className='me-2' icon={faEnvelope} />sk.jaiswal1729@gmail.com
                            </a>
                            <a href='tel:9798843855' className='' style={{ fontSize: 14 }}>
                                <FontAwesomeIcon className='me-2' icon={faPhone} />+91 9798843855
                            </a>
                        </div>

                        <div className="col-8 p-0 mt-auto">
                            <div className="text display-3 text-center my-auto">
                                I code, I design, I build.
                            </div>
                        </div>

                        <div className="col-2 p-0">
                            <div className="d-flex flex-column align-items-end justify-content-center gap-2 px-4">

                                <div>
                                    <a
                                        className=''
                                        href="https://www.linkedin.com/in/skj1729/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className=''
                                        href="https://www.instagram.com/in/suman__jaiswal_/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className=''
                                        href="https://www.github.com/in/suman-jaiswal/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
