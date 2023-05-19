import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Page from './Page'
import './Styles/App.sass'
import { useSelector } from 'react-redux'
function App() {
  const navigationForSmallDeviceState = useSelector(
    (state: any) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)

  const checkShowModal = modalStoreState ? 'blur--modal' : ''
  const checkAppIsBlur = navigationForSmallDeviceState ? 'blur' : ''
  return (
    <>
      <Router>
        <div className="app">
          <span className={checkAppIsBlur || checkShowModal}></span>
          <nav className="app__navigation">
            <Navigation />
          </nav>
          <main className="app__main">
            <Page />
          </main>
        </div>
      </Router>
    </>
  )
}

export default App
