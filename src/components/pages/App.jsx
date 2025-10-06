import BottomNavbar from '../ui/BottomNavbar'
import SectionOne from '../ui/SectionOne'
import SectionTwo from '../ui/SectionTwo'
import TopNavbar from '../ui/TopNavbar'
import './App.css'

function App() {
  return (
    <>
      <div className="app-container">
        <TopNavbar />
        <BottomNavbar />
        <SectionOne />
      </div>
      <SectionTwo />
    </>
  )
}

export default App
