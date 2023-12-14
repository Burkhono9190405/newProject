import React from 'react'
import ShopTop from '../components/ShopTop'
import ShopWrapper from '../components/ShopWrapper'
import Top4 from '../components/Top4'
import BunchOfText from '../components/BunchOfText'
import Top5 from '../components/Top5'
import ShopCardSliderWrapper from '../components/ShopCardSliderWrapper'
import PhoneShopWrapper from '../components/PhoneShopWrapper'


function Shop() { 
  return ( 
   <main>
     <PhoneShopWrapper/>
     <ShopTop title='Home' text=' / Shop' />
     <ShopWrapper/>
     <Top4 title='Product Description' text='Reviews (19)' />
     <BunchOfText/>
     <Top5 title='Releted Products'/>
     <ShopCardSliderWrapper/> 
   </main>
  )
} 

export default Shop