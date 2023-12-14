import React from 'react'
import '../styles/top4.css'
function Top4({title,text}) {
  return (
    <section>
        <div className="container">
            <div className="top4__wrapper">
                <h2>{title}</h2>
                <p>{text}</p> 
            </div>
        </div>
    </section>
  )
}

export default Top4