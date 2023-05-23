import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../../Styles/Navigation.sass'
import logo from '../../Img/logo.png'
import { navigationForSmallDeviceValue } from '../Global/globalStore.ts'
import { useDispatch, useSelector } from 'react-redux'
import NavigationList from './NavigationList.tsx'

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

const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isTimeValueOfMoneyDropDownOpen, setIsTimeValueOfMoneyDropDownOpen] =
    useState(false)
  const [isTimeCreditsDropDownOpen, setIsTimeCreditsDropDownOpen] =
    useState(false)
  const [
    isFinancialInstrumentsValuationDropDownOpen,
    setIsFinancialInstrumentsValuationDropDownOpen,
  ] = useState(false)
  const [isKnowledgeBaseDropDownOpen, setIsKnowledgeBaseDropDownOpen] =
    useState(false)

  const navigationForSmallDeviceState = useSelector(
    (state: NavigationForSmallDeviceType) => state.navigationForSmallDevice.flag
  )

  const modalStoreState = useSelector(
    (state: ModalStoreStateType) => state.modalStore.flag
  )
  const dispatch = useDispatch()

  const reverseCheckTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const toggleNavigationForSmallDevice = () => {
    dispatch(navigationForSmallDeviceValue.toggledFlag())
  }

  const checkTabIndex =
    navigationForSmallDeviceState ||
    (!modalStoreState && window.innerWidth >= 1091)
      ? 1
      : -1

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    if (windowWidth >= 1091) {
      setIsTimeValueOfMoneyDropDownOpen(false)
      setIsTimeCreditsDropDownOpen(false)
      setIsFinancialInstrumentsValuationDropDownOpen(false)
      setIsKnowledgeBaseDropDownOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerWidth])

  const handleHamburgerToggleClass = () => {
    if (window.innerWidth <= 1090) toggleNavigationForSmallDevice()
    setIsTimeValueOfMoneyDropDownOpen(false)
    setIsTimeCreditsDropDownOpen(false)
    setIsFinancialInstrumentsValuationDropDownOpen(false)
    setIsKnowledgeBaseDropDownOpen(false)
  }

  const hamburgerButton = (
    <button
      tabIndex={modalStoreState ? -1 : 1}
      onClick={handleHamburgerToggleClass}
      className="navigation__hamburger"
    >
      <span
        className={`navigation__hamburger--component ${
          navigationForSmallDeviceState
            ? 'navigation__hamburger--component-open45 navigation__hamburger--component-light'
            : ''
        }`}
      ></span>
      <span
        className={`navigation__hamburger--component ${
          navigationForSmallDeviceState
            ? 'navigation__hamburger--component-hidden navigation__hamburger--component-light'
            : ''
        }`}
      ></span>
      <span
        className={`navigation__hamburger--component ${
          navigationForSmallDeviceState
            ? 'navigation__hamburger--component-open-45 navigation__hamburger--component-light'
            : ''
        }`}
      ></span>
    </button>
  )

  const phoneLoginButton = (
    <li>
      <NavLink
        tabIndex={checkTabIndex}
        onClick={handleHamburgerToggleClass}
        to="/UserProfil"
        className="navigation__button--small"
      >
        <span className="navigation__button--custom-text">Zaloguj</span>
      </NavLink>
    </li>
  )

  return (
    <div className="navigation">
      <NavLink
        tabIndex={reverseCheckTabIndex}
        className="navigation__link"
        to="/home"
      >
        <img className="navigation__logo" src={logo} alt="logo" />
      </NavLink>
      <ul
        className={`navigation__list ${
          navigationForSmallDeviceState && 'navigation__list--show'
        }`}
      >
        <NavigationList
          setIsTimeValueOfMoneyDropDownOpen={setIsTimeValueOfMoneyDropDownOpen}
          setIsTimeCreditsDropDownOpen={setIsTimeCreditsDropDownOpen}
          setIsFinancialInstrumentsValuationDropDownOpen={
            setIsFinancialInstrumentsValuationDropDownOpen
          }
          setIsKnowledgeBaseDropDownOpen={setIsKnowledgeBaseDropDownOpen}
          isTimeValueOfMoneyDropDownOpen={isTimeValueOfMoneyDropDownOpen}
          isTimeCreditsDropDownOpen={isTimeCreditsDropDownOpen}
          isFinancialInstrumentsValuationDropDownOpen={
            isFinancialInstrumentsValuationDropDownOpen
          }
          isKnowledgeBaseDropDownOpen={isKnowledgeBaseDropDownOpen}
          checkTabIndex={checkTabIndex}
          handleHamburgerToggleClass={handleHamburgerToggleClass}
        />
        {phoneLoginButton}
      </ul>
      <NavLink
        tabIndex={checkTabIndex}
        to="/UserProfil"
        className="navigation__button"
      >
        <span className="navigation__button--custom-text">Zaloguj</span>
      </NavLink>
      {hamburgerButton}
    </div>
  )
}

export default Navigation
