import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Home() {
    return (
        <div className='home'>
            <div className="section0" style={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <div style={{height: 50}} ></div>
                <div className="sec0-top d-flex" style={{
                 height: '70%'
                }}>
                    <div className="img" style={{
                        backgroundImage: 'url(hero.webp)',
                        backgroundSize: 'cover',
                        clipPath: 'polygon(40% 0, 100% 30%, 90% 100%, -10% 100%)',
                        width: '50%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    </div>
                    <div className=" p-5 d-flex my-auto" style={{
                        width: '40%',
                    }}>
                        <p className='display-2' >
                            <b style={{ color: "#4bffa5", fontWeight: 'bold', }}>Unlock Your Coding Potential !</b>
                        </p>
                    </div>
                </div>

                <div className="sec0-bottom p-5" style={{height: '20%'}}>
                    <div className="h-100 row py-auto">
                        <div className="col-3 h-100 gap-2 p-0 d-flex flex-column justify-content-end">
                        <div className="text-secondary">
                        Copyright © 2024 CodeFit - All Rights Reserved.
                        </div>
                        </div>

                        <div className="col-7 p-0 my-auto">
                            <div className="text display-3 text-center my-auto">
                       
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
            </div>
        </div>
    )
}
