import React from 'react'
import Footer from '../Home/Footer'
import Left from '../Home/Left'
import Right from '../Home/Right'
import "../styling/Timeline.css"

export default function Timeline() {
  return (
    <div className='container'>
        <div className="row timeline">
            <div className="col-md-6">
                <Left />
            </div>
            <div className="col-md-5 offset-md-1">
                <Right />
                <Footer />
            </div>
        </div>
    </div>
  )
}
