import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Page from "./Page";
import './Styles/App.sass'
import { useSelector } from "react-redux";
function App() {
  const flagState = useSelector((state: any) => state.flag)
  const checkAppIsBlur = `${flagState ? 'blur' : ''}`
  return (
    <>
      <Router>
          <div className='app'>
            <span className={checkAppIsBlur}></span>
            <nav className="app__navigation">
              <Navigation />
            </nav>
            <main className='app__main'>
             <Page />
            </main>
          </div>

      </Router>
    </>
  )
}

export default App
