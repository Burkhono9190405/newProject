import React from 'react'
import Top5 from '../components/Top5'
import ShopCardSliderWrapper from '../components/ShopCardSliderWrapper'
import Top2 from '../components/Top2'
import BigInputJolderWrapper from '../components/BigInputJolderWrapper'
import PhoneWrapper2 from '../components/PhoneWrapper2'
import PhonePlantTop from '../components/PhonePlantTop'
function Plant() {
  return ( 
    <div>
      <PhonePlantTop/>
      <Top2 title='Home' text='/ Shop / Shopping Cart '/>
      <PhoneWrapper2/>
      <BigInputJolderWrapper/>
      <Top5 title='You may be interested in'/>
      <ShopCardSliderWrapper/>
      
    </div>  
  )
}

export default Plant