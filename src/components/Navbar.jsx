import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Navbar() {

    const [hovered, setHovered] = React.useState('')

    useEffect(() => {
        const nav = document.querySelector('.nav-wrapper')
        const navHeight = nav.offsetHeight

        const fixNav = () => {
            if (window.scrollY >= navHeight) {
                nav.classList.add('narrow')
            } else {
                nav.classList.remove('narrow')
            }
        }

        window.addEventListener('scroll', fixNav)

        return () => window.removeEventListener('scroll', fixNav)
    }, [])

    const Navlink = ({ children, to }) => (
        <Link
            to={to}
            onMouseEnter={() => setHovered(to)}
            onMouseLeave={() => setHovered('')}
            className="nav-link p-1 mx-1"
        >
            <span
                style={{ opacity: hovered === to ? 1 : 0, color: "#4bffa5" }}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </span>
            {' '} <span style={{ color: hovered === to ? '#4bffa5' : 'whitesmoke' }} >{children}</span>  {' '}
            <span
                style={{ opacity: hovered === to ? 1 : 0, color: "#4bffa5" }}
            >
                /<FontAwesomeIcon icon={faAngleRight} />
            </span>
        </Link>
    )

    return (
        <>
            <div className="nav-wrapper" style={{
                position: 'fixed',
                width: '100%',
                top: 0,
            }}>
                <div className="navbar d-flex justify-content-between">
                    <div className="logo">
                        <div className='name fs-4'>Suman <span style={{ color: "#4bffa5" }} >Jaiswal</span> </div>
                    </div>
                    <div className="nav-links d-flex p-1">
                        {
                            [
                                { to: '/', name: 'Home' },
                                { to: '/resume', name: 'Resume' },
                                { to: '/works', name: 'Works' },
                                { to: '/blog', name: 'Blog' },
                                { to: '/contact', name: 'Contact' },
                            ].map(({ to, name }) => (
                                <Navlink to={to} key={to}>{name}</Navlink>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
