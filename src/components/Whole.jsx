import React from 'react'
import '../styles/whole.css'
import BigCard from './BigCard'
import HomeSection1 from '../components/HomeSection1'
import CardWrapper from '../components/CardWrapper'
import Top3 from './Top3'
function Whole() {
  return (
    <section>
        <div className="container">
            <div className="wrapper_1">
                <div className="content_1">
                    <HomeSection1/>
                    <BigCard/>
                </div>
                <div className="cards_1"> 
                     <Top3/>
                    <CardWrapper/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Whole