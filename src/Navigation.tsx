import { NavLink } from "react-router-dom";
import "./Styles/Navigation.sass";
import logo from './Img/logo.png'
import { useEffect, useState } from "react";
const nav = [
  {
    id: 2,
    path: "/TimeValueOfMoney",
    content: "Wartość pieniądza w czasie",
  },
  {
    id: 3,
    path: "/Credits",
    content: "Kredyty",
  },
  {
    id: 4,
    path: "/FinancialInstrumentsValuation",
    content: "Wyceny",
  },
  {
    id: 5,
    path: "/InvestmentStrategyHelper",
    content: "Dobór Strategii Inwestycyjnej",
  },
  {
    id: 6,
    path: "/KnowledgeBase",
    content: "Baza wiedzy",
  },
  {
    id: 7,
    path: "/AboutMe",
    content: "O mnie",
  },
];

const Navigation = () => {
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) setFlag(false)
    }
  
    window.addEventListener('resize', handleResize)
  
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  const handleHamburgerToggleClass = () => {
    if (window.innerWidth <= 1000) setFlag(prev => !prev)
  }


  const links = nav.map((link) => (
    <li className="navigation__item" key={link.id}>
      <NavLink onClick={handleHamburgerToggleClass} className={`navigation__link`} to={link.path}>{link.content}</NavLink>
    </li>
  ));
  return(
  <div className="navigation">
    <NavLink className={`navigation__link ${flag ? 'navigation__link--hidden' : ''}`} to='/home'>
      <img className="navigation__logo" src={logo} alt="logo" />
    </NavLink>
      <ul className={`navigation__list ${flag ? 'navigation__list--show' : ''}`}>{links}
        {flag ? <li>  <button onClick={handleHamburgerToggleClass} className="navigation__button--small" >
      <NavLink to='/UserProfil' className="navigation__link">
        <span className="navigation__button--custom-text">Zaloguj</span> 
      </NavLink>
      </button></li> : null}
      </ul>
    <button className="navigation__button" >
      <NavLink to='/UserProfil' className="navigation__link">
        <span className="navigation__button--custom-text">Zaloguj</span> 
      </NavLink>
      </button>
      <button onClick={handleHamburgerToggleClass} className='navigation__hamburger'>
        <span className={`navigation__hamburger--component ${flag ? 'navigation__hamburger--component--open45' : ''}`}></span> 
        <span className={`navigation__hamburger--component ${flag ? 'navigation__hamburger--component--hidden' : ''}`}></span> 
        <span className={`navigation__hamburger--component ${flag ? 'navigation__hamburger--component--open-45' : ''}`}></span> 
      </button>
  </div>
  )
};

export default Navigation;
