import React from 'react'
import WholeBlogWrapper from './WholeBlogWrapper'
import TextArea from './TextArea'
import Top7 from './Top7'
import BlogInfoButtons from './BlogInfoButtons'
import BlogInfoPayment from './BlogInfoPayment'
import '../styles/finalblogwrapper.css'
function FinalBlogWrapper() {
    return (
        <div className="container">
            <div className="FinalBlogWrapper">
                <div className="inputonly">
                    <WholeBlogWrapper />
                    <TextArea /> 
                </div>
                <div className="miniFinal">
                    <Top7 />
                    <BlogInfoButtons />
                    <BlogInfoPayment />
                </div>
            </div>
        </div>
    )
}

export default FinalBlogWrapper