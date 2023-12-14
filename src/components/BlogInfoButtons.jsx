import React from 'react'
import '../styles/bloginfobuttons.css'
import icon1 from '../images/image 11 (1).png'
import icon2 from '../images/image 15 (1).png'
import icon3 from '../images/image 16 (1).png'
function BlogInfoButtons() {
    return (
        <div className="BlogInfoButtons">

            <div className="BlogInfoButtonsCard1">
                <div className="smallcard1">
                    <img src={icon1} alt="" />
                    <div className="smallcard_content1">
                        <h2>Barberton Daisy</h2>
                        <p><span>SKU:</span>1995751877966</p>
                    </div>
                </div>
                <h5>(x 2)</h5>
                <h6>$238.00 </h6>
            </div>

            <div className="BlogInfoButtonsCard2">
                <div className="smallcard2">
                    <img src={icon2} alt="" />
                    <div className="smallcard_content1">
                        <h2>Blushing Bromeliad</h2>
                        <p><span>SKU:</span>19957518757065</p>
                    </div>
                </div>
                <h5>(x 6)</h5>
                <h6>$834.00</h6>
            </div>

            <div className="BlogInfoButtonsCard3">
                <div className="smallcard3">
                    <img src={icon3} alt="" />
                    <div className="smallcard_content1">
                        <h2>Aluminum Plant</h2>
                        <p><span>SKU:</span>1995751877786</p>
                    </div>
                </div>
                <h5>(x 9)</h5>
                <h6>$1,611.00</h6>
            </div>
        </div>
    )
}

export default BlogInfoButtons