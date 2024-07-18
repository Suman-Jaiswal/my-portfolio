import React from 'react'

export default function BlogCard() {
    return (
        <>
            <div className="row">
                <div className="col-12 p-2" style={{ height: 300, border: '1px solid #282828' }} >
                    <div className="d-flex gap-2 h-100 align-items-center justify-content-between">
                        <div className="blogimg h-100" >
                        </div>
                        <div className="content p-3 w-75">
                            <div className="title my-2">
                                <h3>Blog Title</h3>
                            </div>
                            <div className="description text-secondary my-2">
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                    Lorem ipsum dolor sit,aliquam cumque blanditiis consequatur maxime hic quae repudiandae at itaque reiciendis perspiciatis, inventore illo. Temporibus quos officiis maxime voluptatum corporis.
                                </div>

                            </div>
                            <div className="author my-2" style={{ color: '#4bffa5' }}>
                                <div>Author</div>
                            </div>
                            <div className="date text-secondary my-2">
                                <div>12/12/2021</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col" style={{ height: 80, borderLeft: '1px solid #282828' }} ></div>
                <div className="col" style={{ height: 80, borderLeft: '1px solid #282828', borderRight: '1px solid #282828' }} ></div>
            </div>
        </>
    )
}
