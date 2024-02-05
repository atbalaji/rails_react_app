import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from './components/PostsList'

function App() {

  return (
    <>
      <div className='app'>
        <h1>React on Rails</h1>
        <p>Find this application layout</p>
        <PostsList />
      </div>
    </>
  )
}

export default App;
