import { useEffect, useState } from 'react'
import { useAppDispatch } from './store/store'
import { addPages } from './store/routing/routingslice'
import HomePage from './Pages/HomePage'
import Left_Bar from './components/Left_Bar'
import Top_Bar from './components/Top_Bar'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useAppDispatch()

  
  return (
    <>
    <div className="content_container">
      <Left_Bar/>
      <div className="right_side">
        <Top_Bar/>
        <HomePage/>
      </div>
    </div>
    </>
  )
}

export default App
