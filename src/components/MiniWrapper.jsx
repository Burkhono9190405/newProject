import React from 'react'
import '../styles/miniwrapper.css'
import MiniCard from './MiniCard'
import icon1 from '../images/image 14.png'
import icon2 from '../images/image 15.png'
function MiniWrapper() {
    return (
        <section>
            <div className="container">
                <div className="wrapper__minicard">
                    <MiniCard title='Summer cactus
                    & succulents' text='We are an online plant shop offering a wide range of cheap and trendy plants' image={icon1} />
                    <MiniCard title='Styling Trends
                    & much more' text='We are an online plant shop offering a wide range of cheap and trendy plants' image={icon2} />
                </div>
            </div> 
        </section>
    )
}

export default MiniWrapper