import React from 'react'
import HomeHero from '../components/HomeHero'
import Whole from '../components/Whole'
import Top from '../components/Top'
import MiniWrapper from '../components/MiniWrapper'
import Top6 from '../components/Top6'
import BlogCardWrapper from '../components/BlogCardWrapper'
import InputHeader from '../components/InputHeader'
import PhoneCardsWrapper from '../components/PhoneCardsWrapper'


function Home() {
  return (
    <main>
      <InputHeader/>
      <HomeHero/> 
      <PhoneCardsWrapper/>
      <Whole/>
      <Top/>
      <MiniWrapper/>
      <Top6 title='Our Blog Posts' text='We are an online plant shop offering a wide range of cheap and trendy plants. '/>
      <BlogCardWrapper/> 
      
    </main>
  )
}

export default Home