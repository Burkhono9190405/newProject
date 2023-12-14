import React from 'react'
import Top2 from '../components/Top2'
import TopAddress from '../components/TopAddress'
import FinalBlogWrapper from '../components/FinalBlogWrapper'


function Blog() {
  return (
    <div>
      <Top2 title='Home' text='/ Shop / Checkout' />
      <TopAddress/>
       <FinalBlogWrapper /> 
    </div>
  ) 
} 

export default Blog