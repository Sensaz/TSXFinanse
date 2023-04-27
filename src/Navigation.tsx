import { NavLink } from "react-router-dom";
import "./Styles/Navigation.sass";
const nav = [
  {
    id: 0,
    path: "/home",
    content: "Home",
  },
  {
    id: 1,
    path: "/TimeValueOfMoney",
    content: "Wartość pieniądza w czasie",
  },
  {
    id: 2,
    path: "/Credits",
    content: "Kredyty",
  },
  {
    id: 3,
    path: "/FinancialInstrumentsValuation",
    content: "Wyceny",
  },
  {
    id: 4,
    path: "/InvestmentStrategyHelper",
    content: "Dobór Strategii Inwestycyjnej",
  },
  {
    id: 5,
    path: "/KnowledgeBase",
    content: "Baza wiedzy",
  },
  {
    id: 6,
    path: "/AboutMe",
    content: "O mnie",
  },
  {
    id: 7,
    path: "/UserProfil",
    content: "user",
  },
];

const Navigation = () => {
  const links = nav.map((link) => (
    <li className="list__item" key={link.id}>
      <NavLink to={link.path}>{link.content}</NavLink>
    </li>
  ));
  return <ul className="list">{links}</ul>;
};

export default Navigation;
