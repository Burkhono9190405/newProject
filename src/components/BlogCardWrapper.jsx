import React from 'react'
import '../styles/blogcardwrapper.css'
import BlogCard from './BlogCard'
import icon1 from '../images/01.png'
import icon2 from '../images/02.png'
import icon3 from '../images/03.png'
import icon4 from '../images/04.png'
function BlogCardWrapper() {
    return ( 
        <section>
            <div className="container">
              <div className="wrap__blogcard1">
              <BlogCard image={icon1} info='September 12  I Read in 6 minutes' title='Cactus & Succulent 
                Care Tips' text='Cacti are succulents are easy care plants for any home or patio. ' />
                <BlogCard image={icon2} info='September 13  I Read in 2 minutes' title='Top 10 Succulents for
                Your Home' text='Best in hanging baskets. Prefers medium to high light.' />
                <BlogCard image={icon3} info='September 15  I Read in 3 minutes' title='Cacti & Succulent 
                Care Tips' text='Cacti and succulents thrive in containers and because most are..' />
                <BlogCard image={icon4} info='September 15  I Read in 2 minutes' title='Best Houseplants 
                Room by Room' text='The benefits of houseplants are endless. In addition to..' />
              </div>
            </div>
        </section>
    )
}

export default BlogCardWrapper