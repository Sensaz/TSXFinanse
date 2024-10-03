import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Page from './Page'
import './Styles/App.sass'
import { useSelector } from 'react-redux'

interface NavigationForSmallDeviceType {
  navigationForSmallDevice: {
    flag: boolean
  }
}

interface ModalStoreStateType {
  modalStore: {
    flag: boolean
  }
}

function App() {
  const navigationForSmallDeviceState = useSelector(
    (state: NavigationForSmallDeviceType) => state.navigationForSmallDevice.flag
  )

  const modalStoreState = useSelector(
    (state: ModalStoreStateType) => state.modalStore.flag
  )

  const checkShowModal = modalStoreState ? 'blur--modal' : ''
  const checkAppIsBlur = navigationForSmallDeviceState ? 'blur' : ''
  const checkNavigationIsShow = navigationForSmallDeviceState
    ? 'app--hidden'
    : ''

  return (
    <>
      <Router>
        <div className={`app ${checkNavigationIsShow}`}>
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
