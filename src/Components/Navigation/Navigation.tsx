import { NavLink } from "react-router-dom";
import { MouseEvent, useEffect, useState } from "react";
import Dropdown from "./DropDown.tsx";
import DropDownItem from "./DropDownItem.tsx";
import "../../Styles/Navigation.sass";
import logo from '../../Img/logo.png'
import {navigationForSmallDeviceValue, phoneButtonValue} from '../Global/globalStore.ts'
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTimeValueOfMoneyDropdownOpen, setIsTimeValueOfMoneyDropdownOpen] = useState(false);
  const [isTimeCreditsDropdownOpen, setIsTimeCreditsDropdownOpen] = useState(false);
  const [isFinancialInstrumentsValuationDropdownOpen, setIsFinancialInstrumentsValuationDropdownOpen] = useState(false);
  const [isKnowledgeBaseDropdownOpen, setIsKnowledgeBaseDropdownOpen] = useState(false);
  
  
  const navigationForSmallDeviceState = useSelector((state: any) => state.navigationForSmallDevice.flag)
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)
  const dispatch = useDispatch()
  
  const showPhonButtonState = useSelector((state: any) => state.phoneButton.flag)
  
  const checkTabIndex = showPhonButtonState  && navigationForSmallDeviceState ? 1 : -1

  const toggleNavigationForSmallDevice  = () => {
    dispatch(navigationForSmallDeviceValue.toggledFlag());
  }

  const setNavigationForSmallDeviceFalse = () => {
    dispatch(navigationForSmallDeviceValue.setFalseFlag())
  }
  const setShowPhoneButtonFalse = () => {
    dispatch(phoneButtonValue.setFalseFlag())
  }
  const setShowPhoneButtonTrue = () => {
    dispatch(phoneButtonValue.setTrueFlag())
  }
  
  const handleTimeValueOfMoneyDropdownOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setIsTimeValueOfMoneyDropdownOpen(prev => !prev);
    const target = e.target as HTMLAnchorElement;
    if (target.className === "navigation__dropdown-link") {
      setNavigationForSmallDeviceFalse();
    }

    setIsTimeCreditsDropdownOpen(false);
    setIsFinancialInstrumentsValuationDropdownOpen(false);
    setIsKnowledgeBaseDropdownOpen(false);
  };
  

  const handleTimeCreditsDropdownOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setIsTimeCreditsDropdownOpen(prev => !prev)
    const target = e.target as HTMLAnchorElement;
    if(target.className === "navigation__dropdown-link") setNavigationForSmallDeviceFalse()
    setIsTimeValueOfMoneyDropdownOpen(false)
    setIsFinancialInstrumentsValuationDropdownOpen(false)
    setIsKnowledgeBaseDropdownOpen(false)
  }

  const handleFinancialInstrumentsValuationDropdownOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setIsFinancialInstrumentsValuationDropdownOpen(prev => !prev)
    const target = e.target as HTMLAnchorElement;
    if(target.className === "navigation__dropdown-link") setNavigationForSmallDeviceFalse()
    setIsTimeCreditsDropdownOpen(false)
    setIsTimeValueOfMoneyDropdownOpen(false)
    setIsKnowledgeBaseDropdownOpen(false)
  }

  const handleKnowledgeBaseDropdownOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setIsKnowledgeBaseDropdownOpen(prev => !prev)
    const target = e.target as HTMLAnchorElement;
    if(target.className === "navigation__dropdown-link") setNavigationForSmallDeviceFalse()
    setIsTimeCreditsDropdownOpen(false)
    setIsTimeValueOfMoneyDropdownOpen(false)
    setIsFinancialInstrumentsValuationDropdownOpen(false)
  }

  const nav = [
    {
      id: 0,
      content: <Dropdown  isOpen={isTimeValueOfMoneyDropdownOpen} click={handleTimeValueOfMoneyDropdownOpen} title="Wartość Pieniądza w czasie">
        <>
          <DropDownItem click={handleTimeValueOfMoneyDropdownOpen} path="TimeValueOfMoney/FutureValueOfASingleFlowCalculator">
            Wartość przyszła pojedynczego przepływu
          </DropDownItem>

          <DropDownItem click={handleTimeValueOfMoneyDropdownOpen} path="TimeValueOfMoney/PresentValueOfASingleFlowCalculator">
            Wartość obecna pojedynczego przepływu
          </DropDownItem>
          
          <DropDownItem click={handleTimeValueOfMoneyDropdownOpen} path="TimeValueOfMoney/FutureValueOfAnAnnuityCalculator">
            Wartość przyszła renty
          </DropDownItem>
          <DropDownItem click={handleTimeValueOfMoneyDropdownOpen} path="TimeValueOfMoney/PresentValueOfAnAnnuityCalculator">
            Wartość obecna renty
          </DropDownItem>
        

          <li className="navigation__dropdown-divider"></li>

          <DropDownItem click={handleTimeValueOfMoneyDropdownOpen} path="KnowledgeBase/FinancialInstruments">
            Jak to działa?
          </DropDownItem>
        </>
      </Dropdown>
    },
    {
      id: 1,
      content:  <Dropdown isOpen={isTimeCreditsDropdownOpen} click={handleTimeCreditsDropdownOpen} title="Kredyty">
      <>
          <DropDownItem click={handleTimeCreditsDropdownOpen} path="Credits/LoanAmortizationSimulation">Symulacja Amortyzacji Kredytu</DropDownItem>

          <DropDownItem click={handleTimeCreditsDropdownOpen} path="Credits/CreditCalculator"> Kalkulator Zdolności Kredytowej</DropDownItem>
          
          <li className="navigation__dropdown-divider"></li>
          
          <DropDownItem click={handleTimeCreditsDropdownOpen} path="KnowledgeBase/FinancialInstruments">Jak to działa?</DropDownItem>
      </>
    </Dropdown>
    },
    {
      id: 2,
      content: <Dropdown isOpen={isFinancialInstrumentsValuationDropdownOpen} click={handleFinancialInstrumentsValuationDropdownOpen} title="Wyceny">
      <>
          <DropDownItem click={handleFinancialInstrumentsValuationDropdownOpen} path="FinancialInstrumentsValuation/BondValuationCalculator">Obligacji</DropDownItem>
          
          <DropDownItem click={handleFinancialInstrumentsValuationDropdownOpen} path="FinancialInstrumentsValuation/EquitiesValuationCalculator">Akcji</DropDownItem>
          
          <DropDownItem click={handleFinancialInstrumentsValuationDropdownOpen} path="FinancialInstrumentsValuation/OptionValutionCalculator">Opcji</DropDownItem>

          <DropDownItem click={handleFinancialInstrumentsValuationDropdownOpen} path="FinancialInstrumentsValuation/FuturesAndForwardsCalculator">Kontraktu Futures i Forword</DropDownItem>

          <DropDownItem click={handleFinancialInstrumentsValuationDropdownOpen} path="FinancialInstrumentsValuation/SwapPricingCalculator">Kontraktu Swap</DropDownItem>
          
          <li className="navigation__dropdown-divider"></li>
          
          <DropDownItem click={handleFinancialInstrumentsValuationDropdownOpen} path="KnowledgeBase/FinancialInstruments">Jak to działa?</DropDownItem>
      </>
    </Dropdown>,
    },
    {
      id: 3,
      path: "/InvestmentStrategyHelper",
      content: "Dobór Strategii Inwestycyjnej",
    },
    {
      id: 4,
      content: <Dropdown isOpen={isKnowledgeBaseDropdownOpen} click={handleKnowledgeBaseDropdownOpen} title="Baza Wiedzy">
      <>
          <DropDownItem click={handleKnowledgeBaseDropdownOpen} path="KnowledgeBase/FinancialInstruments">Instrumenty Finansowe</DropDownItem>
          
          <DropDownItem click={handleKnowledgeBaseDropdownOpen} path="KnowledgeBase/InvestmentStrategies">Strategie Inwestycyjne</DropDownItem>
          
          <DropDownItem click={handleKnowledgeBaseDropdownOpen} path="KnowledgeBase/SolutionsInApp">Opis Rozwiązań w Aplikacji</DropDownItem>

      </>
    </Dropdown>,
    },
    {
      id: 5,
      path: "/AboutMe",
      content: "O mnie",
    },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (windowWidth >= 1091) {
      setNavigationForSmallDeviceFalse()
      setIsTimeValueOfMoneyDropdownOpen(false)
      setIsTimeCreditsDropdownOpen(false)
      setIsFinancialInstrumentsValuationDropdownOpen(false)
      setIsKnowledgeBaseDropdownOpen(false)
      setShowPhoneButtonFalse()
    } else setShowPhoneButtonTrue()

    if (windowWidth <= 1090) {
      navigationForSmallDeviceState ? document.body.style.overflow = 'hidden' : document.body.style.overflowY = 'auto'
    }
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth, navigationForSmallDeviceState]);
  
  

  const handleHamburgerToggleClass = () => {
    if (window.innerWidth <= 1090) toggleNavigationForSmallDevice ()
    setIsTimeValueOfMoneyDropdownOpen(false)
    setIsTimeCreditsDropdownOpen(false)
    setIsFinancialInstrumentsValuationDropdownOpen(false)
    setIsKnowledgeBaseDropdownOpen(false)
  }

  const links = nav.map((link) => (
    <li className="navigation__item" key={link.id}>
      {typeof link.content === "string" ? (
        <NavLink tabIndex={checkTabIndex} onClick={handleHamburgerToggleClass} className="navigation__link" to={link.path}>
          {link.content}
        </NavLink>
      ) : (   
        link.content
      )}
    </li>
  ));

  const hamburgerButton = showPhonButtonState &&
  <button tab onClick={handleHamburgerToggleClass} className='navigation__hamburger'>
    <span className={`navigation__hamburger--component ${navigationForSmallDeviceState ? 'navigation__hamburger--component-open45 navigation__hamburger--component-light': ''}`}></span>
    <span className={`navigation__hamburger--component ${navigationForSmallDeviceState ? 'navigation__hamburger--component-hidden navigation__hamburger--component-light': ''}`}></span>
    <span className={`navigation__hamburger--component ${navigationForSmallDeviceState ? 'navigation__hamburger--component-open-45 navigation__hamburger--component-light' : ''}`}></span>
  </button>
  
  const phoneLoginButton = showPhonButtonState &&
  <li>
    <NavLink tabIndex={checkTabIndex} onClick={handleHamburgerToggleClass} to='/UserProfil' className="navigation__button--small">
      <span className="navigation__button--custom-text">Zaloguj</span>
    </NavLink>
  </li>

  return(
    <div className="navigation">
      <NavLink tabIndex={checkTabIndex} className='navigation__link' to='/home'>
        <img className="navigation__logo" src={logo} alt="logo" />
      </NavLink>
        <ul className={`navigation__list ${navigationForSmallDeviceState && 'navigation__list--show'}`}>
          {links}
          {phoneLoginButton}
        </ul>
        <NavLink to='/UserProfil' className="navigation__button">
            <span className="navigation__button--custom-text">Zaloguj</span> 
        </NavLink>
        {hamburgerButton}
    </div>
  )
};

export default Navigation;
