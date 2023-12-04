import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './store/store'
import { addPages } from './store/routing/routingslice'
import HomePage from './Pages/HomePage'
import Left_Bar from './components/Left_Bar'
import Top_Bar from './components/Top_Bar'
import AboutPage from './Pages/AboutPage'
import ProjectPage from './Pages/ProjectPage'
import SkillPage from './Pages/SkillPage'

function App() {
  const currentPage = useAppSelector(state => state.routing.currentPage)
  const [count, setCount] = useState(0)
  const dispatch = useAppDispatch()

  
  return (
    <>
    <div className="content_container">
      <Left_Bar/>
      <div className="right_side">
        <Top_Bar/>
        {currentPage == "MainPage" ? (<HomePage/>) 
      : currentPage == "AboutPage" ? (<AboutPage/>)
      : currentPage == "ProjectsPage" ? (<ProjectPage/>) 
      : (<SkillPage/>)
      }
      </div>
    </div>
    </>
  )
}

export default App
