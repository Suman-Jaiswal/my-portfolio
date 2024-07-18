import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Navbar() {

    const [hovered, setHovered] = React.useState('')

    useEffect(() => {
        const nav = document.querySelector('.nav-wrapper')
        var lastScrollTop = 0;

        const fixNav = () => {
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop) {
                // downscroll code
                nav.style.top = '-100px'
            } else if (st < lastScrollTop) {
                // upscroll code
                nav.style.top = '0'
            } // else was horizontal scroll
            lastScrollTop = st <= 0 ? 0 : st;
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
            style={{transition: 'all 0.5s ease-in-out'}}
        >
            <span
                style={{ opacity: hovered === to ? 1 : 0, color: "#4bffa5", transition: 'all 0.5s ease-in-out'}}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </span>
            {' '} <span style={{ color: hovered === to ? '#4bffa5' : 'whitesmoke', transition: 'all 0.5s ease-in-out' }} >{children}</span>  {' '}
            <span
                style={{ opacity: hovered === to ? 1 : 0, color: "#4bffa5", transition: 'all 0.5s ease-in-out'}}
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
                    <Link to={'/'}>
                        <img src="codefit.png" alt="CodeFit" style={{
                            height: 80
                        }} />
                    </Link>
                    </div>
                    <div className="nav-links d-flex py-2 px-4" style={{
                        borderRadius: '50px',
                        backgroundColor: 'rgba(16, 16, 16, 0.5)',
                        boxShadow: '0px 1px 1px #222',
                        fontSize: 14,
                    }}>
                        {
                            [
                                { to: '/blogs', name: 'Blogs' },
                                { to: '/projects', name: 'Projects' },
                                { to: '/contact', name: 'Contact' },
                            ].map(({ to, name }) => (
                                <Navlink  to={to} key={to}>{name}</Navlink>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
