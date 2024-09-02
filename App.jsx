import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './App.css'
import NavBar from "./assets/Nav.jsx"

function App() {
  return (
    <NavBar />
    
  )
}
ReactDOM.createRoot(document.getElementById('root')).render( <App />)
