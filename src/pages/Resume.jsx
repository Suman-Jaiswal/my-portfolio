import React from 'react'
import Banner from '../components/Banner'

export default function Resume() {
    return (
        <div className="resume">
            <Banner title='Resume' />

            <div className="section1">
                <div className="container py-5">
                    <div className="row">
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828' }} ></div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828' }} ></div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828', borderRight: '1px solid #282828' }} ></div>
                    </div>

                    <div className="row">
                        <div className="col d-flex align-items-center" style={{ height: 300, border: '1px solid #282828' }} >
                            <div className="d-flex gap-3">
                                <div className="p-3">
                                    <img style={{ width: 220 }} src="profile.jpg" alt="IMG-20210710-134247" border="0" />
                                </div>
                                <div className="content p-3">
                                    <div className="lead">
                                        Hello! I'm Suman Jaiswal. Web & App Developer from Supaul, India. I have rich experience in website developemnt and building, also I am good at wordpress. I love to talk with you about our unique.
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
