import { useState } from 'react'
import './App.css'
import Navibar from './components/Navibar'
import NewsBoard from './components/NewsBoard'

function App() {
  const [category, setCategory] = useState("general")

  return (
    <>
      <Navibar setCategory={setCategory} />
      <div className='background'>
        <NewsBoard category={category} />
      </div>
    </>
  )
}

export default App