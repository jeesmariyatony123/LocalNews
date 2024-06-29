import { useState } from 'react'
import './App.css'
import Navibar from './components/Navibar'
import NewsBoard from './components/NewsBoard'

function App() {
  const [category, setCategory] = useState("general")

  return (
    <>
      <Navibar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </>
  )
}

export default App