import React from 'react'
import Demo from './components/Demo'
import Navigation from './components/Navigation'
import Timeline from './components/Timeline'
import "./styling/App.css"

export default function App() {
  return (
    <>
      <Navigation />
      <Timeline /> <hr/>

      <Demo />

    </>
  )
}
