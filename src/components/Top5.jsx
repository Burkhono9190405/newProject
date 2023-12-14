import React from 'react'
import '../styles/top5.css'
function Top5({title}) {
  return (
    <section>
        <div className="container">
            <div className="Top5">
               <h2>{title}</h2>
            </div>
        </div>
    </section>
  )
}

export default Top5