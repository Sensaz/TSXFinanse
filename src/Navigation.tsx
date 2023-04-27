import { NavLink } from "react-router-dom";
import "./Styles/Navigation.sass";
import logo from './Img/logo.png'
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
  const links = nav.map((link) => (
    <li className="navigation__item" key={link.id}>
      <NavLink className={`navigation__link`} to={link.path}>{link.content}</NavLink>
    </li>
  ));
  return(
  <div className="navigation">
    <ul className="navigation__list">
      <li className="navigation__item" >
        <NavLink className={`navigation__link`} to='/home'>
          <img className="navigation__logo" src={logo} alt="logo" />
        </NavLink>
      </li>
      {links}
      </ul>

      {/* <NavLink to='/UserProfil' className="navigation__link">
        <button className="navigation__button" >Zaloguj</button>
      </NavLink> */}
      <button className="navigation__button" >
        <NavLink to='/UserProfil' className="navigation__link">
         <span className="navigation__button--custom-text">Zaloguj</span> 
        </NavLink>
      </button>
      

  </div>
  )
};

export default Navigation;
