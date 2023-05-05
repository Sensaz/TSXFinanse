import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Dropdown from "./DropDown.tsx";
import DropDownItem from "./DropDownItem.tsx";
import "../../Styles/Navigation.sass";
import logo from '../../Img/logo.png'

const Navigation = () => {
  const [flag, setFlag] = useState(false)
  const [isTimeValueOfMoneyDropdownOpen, setIsTimeValueOfMoneyDropdownOpen] = useState(false);
  const [isTimeCreditsDropdownOpen, setIsTimeCreditsDropdownOpen] = useState(false);
  const [isFinancialInstrumentsValuationDropdownOpen, setIsFinancialInstrumentsValuationDropdownOpen] = useState(false);
  const [isKnowledgeBaseDropdownOpen, setIsKnowledgeBaseDropdownOpen] = useState(false);

  const handleTimeValueOfMoneyDropdownOpen = (e: any) => {
    setIsTimeValueOfMoneyDropdownOpen(prev => !prev)
    if(e.target.className === "dropdown__item--lowerLevel") setFlag(false)
    setIsTimeCreditsDropdownOpen(false)
    setIsFinancialInstrumentsValuationDropdownOpen(false)
    setIsKnowledgeBaseDropdownOpen(false)
  }

  const handleTimeCreditsDropdownOpen = (e: any) => {
    setIsTimeCreditsDropdownOpen(prev => !prev)
    if(e.target.className === "dropdown__item--lowerLevel") setFlag(false)
    setIsTimeValueOfMoneyDropdownOpen(false)
    setIsFinancialInstrumentsValuationDropdownOpen(false)
    setIsKnowledgeBaseDropdownOpen(false)
  }

  const handleFinancialInstrumentsValuationDropdownOpen = (e: any) => {
    setIsFinancialInstrumentsValuationDropdownOpen(prev => !prev)
    if(e.target.className === "dropdown__item--lowerLevel") setFlag(false)
    setIsTimeCreditsDropdownOpen(false)
    setIsTimeValueOfMoneyDropdownOpen(false)
    setIsKnowledgeBaseDropdownOpen(false)
  }

  const handleKnowledgeBaseDropdownOpen = (e: any) => {
    setIsKnowledgeBaseDropdownOpen(prev => !prev)
    if(e.target.className === "dropdown__item--lowerLevel") setFlag(false)
    setIsTimeCreditsDropdownOpen(false)
    setIsTimeValueOfMoneyDropdownOpen(false)
    setIsFinancialInstrumentsValuationDropdownOpen(false)
  }

  const nav = [
    {
      id: 0,
      content: <Dropdown isOpen={isTimeValueOfMoneyDropdownOpen} click={handleTimeValueOfMoneyDropdownOpen} title="Wartość Pieniądza w czasie">
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
        

          <li className="dropdown__divider"></li>

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
          
          <li className="dropdown__divider"></li>
          
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
          
          <li className="dropdown__divider"></li>
          
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
    const handleResize = () => {
      if (window.innerWidth >= 1091) {
        setFlag(false)
        setIsTimeValueOfMoneyDropdownOpen(false)
        setIsTimeCreditsDropdownOpen(false)
        setIsFinancialInstrumentsValuationDropdownOpen(false)
        setIsKnowledgeBaseDropdownOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerWidth])
  
  const handleHamburgerToggleClass = () => {
    if (window.innerWidth <= 1090) {
      setFlag(prev => !prev)
      setIsTimeValueOfMoneyDropdownOpen(false)
      setIsTimeCreditsDropdownOpen(false)
      setIsFinancialInstrumentsValuationDropdownOpen(false)
      setIsKnowledgeBaseDropdownOpen(false)
    }
  }

  const links = nav.map((link) => (
    <li className="navigation__item" key={link.id}>
      {typeof link.content === "string" ? (
        <NavLink onClick={handleHamburgerToggleClass} className="navigation__link" to={link.path}>
          {link.content}
        </NavLink>
      ) : (
        link.content
      )}
    </li>
  ));
  
  return(
  <div className="navigation">
    <NavLink className={`navigation__link `} to='/home'>
      <img className="navigation__logo" src={logo} alt="logo" />
    </NavLink>
      <ul className={`navigation__list ${flag && 'navigation__list--show'}`}>{links}
        {flag && <li><button onClick={handleHamburgerToggleClass} className="navigation__button--small" >
      <NavLink to='/UserProfil' className="navigation__link">
        <span className="navigation__button--custom-text">Zaloguj</span> 
      </NavLink>
      </button></li>}
      </ul>
    <button className="navigation__button" >
      <NavLink to='/UserProfil' className="navigation__link">
        <span className="navigation__button--custom-text">Zaloguj</span> 
      </NavLink>
      </button>
      <button onClick={handleHamburgerToggleClass} className='navigation__hamburger'>
        <span className={`navigation__hamburger--component ${flag && 'navigation__hamburger--component--open45'}`}></span> 
        <span className={`navigation__hamburger--component ${flag && 'navigation__hamburger--component--hidden'}`}></span> 
        <span className={`navigation__hamburger--component ${flag && 'navigation__hamburger--component--open-45'}`}></span> 
      </button>
  </div>
  )
};

export default Navigation;
