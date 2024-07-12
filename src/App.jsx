import { useState } from 'react'
import './App.css'
import './components/Index/Index'
import Index from './components/Index/Index'

function App() {

  return (
    <>
      <Index.Header />
      <Index.Home />
      <Index.Footer />
    </>
  )
}

export default App
