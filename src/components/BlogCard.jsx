import React from 'react'
import '../styles/blogwrapper.css'
import icon1 from '../images/Arrow - Right1.png'
function BlogCard({ image, info, title, text }) {
    return (
        <div className="blog_wrapper">
            <img src={image} alt="" />
            <div className="miniblog">
                <h4>{info}</h4>
                <h2>{title}</h2>
                <p>{text}</p>
                <h5> Read More <img src={icon1} alt="" /></h5>
            </div>
        </div>
    )
}

export default BlogCard