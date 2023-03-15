import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner';

export default function Works() {

    const [repos, setRepos] = useState([])
    const [tab, setTab] = useState('github')

    useEffect(() => {
        fetch('https://api.github.com/users/suman-jaiswal/repos')
            .then(res => res.json())
            .then(data => setRepos(data))
    }, [])

    console.log(repos);

    return (
        <div className='works'>

            <Banner title='Works' />

            <div className="section1">
                <div className="container py-5">
                    <div className="header d-flex justify-content-between">
                        <div className="h3 fw-bold" style={{ color: '#4bffa5' }}>
                            My Projects
                        </div>
                        <div className="tabs d-flex align-items-center " style={{ border: "1px solid #282828" }}>
                            <div
                                onClick={() => setTab('github')}
                                role={'button'}
                                style={{ backgroundColor: tab === 'github' ? "#4bffa5" : "transparent", color: tab === 'github' ? "black" : "whitesmoke", borderRight: "1px solid #282828" }}
                                className="p-1 px-3">
                                GitHub
                            </div>
                            <div
                                onClick={() => setTab('websites')}
                                role={'button'}
                                style={{ backgroundColor: tab === 'websites' ? "#4bffa5" : "transparent", color: tab === 'websites' ? "black" : "whitesmoke", borderRight: "1px solid #282828" }}
                                className="p-1 px-3">
                                Websites
                            </div>
                            <div
                                onClick={() => setTab('utilities')}
                                role={'button'}
                                style={{ backgroundColor: tab === 'utilities' ? "#4bffa5" : "transparent", color: tab === 'utilities' ? "black" : "whitesmoke" }}
                                className="p-1 px-3">
                                Utilities
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        {
                            repos.map(repo => (
                                <div className="col-12 col-md-6 col-lg-4 p-2">
                                    <div className=" p-3" style={{ border: '1px solid #282828' }}>
                                        <div className="card-body">
                                            <h6 className="card-title">{repo.name}</h6>
                                            <p className="card-text text-secondary mt-2" style={{
                                                fontSize: 14,
                                            }}>{repo.description ? repo.description.substring(0, 50) + "..."
                                                : "..."}
                                            </p>

                                            <div className="d-flex gap-3">

                                                <a
                                                    style={{ border: '1px solid #282828' }}
                                                    target={'_blank'}
                                                    rel='noreferrer'
                                                    href={repo.html_url} className="btn btn-sm">View Code</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }

                    </div>

                </div>
            </div>
        </div>
    )
}
