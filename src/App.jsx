import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Grid from './components/Grid/Grid'

function App() {

  return (
    <div className="App">
        <Header></Header>
        <Grid></Grid>
    </div>
  )
}

export default App
