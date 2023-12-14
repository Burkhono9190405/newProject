import React from 'react'
import '../styles/top2.css'
function Top2({title, text}) {
  return (
    <section>
        <div className="container">
            <div className="top__wrapper2">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    </section>
  )
}

export default Top2