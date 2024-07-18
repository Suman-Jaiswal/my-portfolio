import React from 'react'

export default function Banner({ title }) {
    return (
        <div className="section0" style={{
            height: '25vh',
            backgroundImage: 'url(works.jpg) ',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

        }}>
            <div className="h-100 w-100" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <div className="display-2 fw-bold">
                    {title}
                </div>
            </div>
        </div>
    )
}
