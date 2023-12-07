import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './store/store'
import { addPages, setCurrentPage } from './store/routing/routingslice'
import HomePage from './Pages/HomePage'
import Left_Bar from './components/Left_Bar'
import Top_Bar from './components/Top_Bar'
import AboutPage from './Pages/AboutPage'
import ProjectPage from './Pages/ProjectPage'
import SkillPage from './Pages/SkillPage'
import Modal_Page from './components/modal'

function App() {
  const currentPage = useAppSelector(state => state.routing.currentPage)
  const modal = useAppSelector((state) => state.routing.modal)
  const [count, setCount] = useState(0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setCurrentPage('MainPage'))
  },[])
  
  console.log(currentPage)
  return (
    <>
    <div className="content_container">
    {modal && <Modal_Page/>}
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
