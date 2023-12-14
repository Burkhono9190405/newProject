import React from 'react'
import InputHolder from './InputHolder'
import PlantInput from './PlantInput'
import '../styles/biginputholderwrapper.css'
function BigInputJolderWrapper() {
    return (
        <section>
            <div className="container">
                <div className="BigInputJolderWrapper">
                    <InputHolder />
                    <PlantInput />
                </div>
            </div>
        </section>
    )
} 

export default BigInputJolderWrapper