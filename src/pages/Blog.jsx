import React from 'react'
import Banner from '../components/Banner'
import BlogCard from '../components/BlogCard'

export default function Blog() {
    return (
        <div className='blog'>

            <Banner title='Blog' />

            <div className="section1">
                <div className="container" >

                    <br />
                    <div className="row">
                        <div className="col d-flex align-items-center" style={{ height: 80, borderLeft: '1px solid #282828' }} >

                            <div className="h3 fw-bold m-0 ps-4" >
                                Latest Posts
                            </div>

                        </div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828' }} ></div>
                        <div className="col" style={{ height: 80, borderLeft: '1px solid #282828', borderRight: '1px solid #282828' }} >
                            Search
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-8 " style={{ height: '63vh', overflowY: 'scroll', position: 'sticky', top: 0 }}>

                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />

                        </div>

                        <div className="col-4" style={{ height: 400, border: '1px solid #282828', borderLeft: 'none', borderBottom: 'none' }}>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
