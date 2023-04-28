import { MouseEventHandler, ReactElement, ReactNode } from 'react';
import arrowDropDown from '../../Img/arrow_drop_down.svg'
import arrowDropUp from '../../Img/arrow_drop_up.svg'


interface MyComponentProps {
  click: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
  title: ReactNode;
  children: ReactElement<any>;
}

const Dropdown = ({ isOpen, click, title, children }:MyComponentProps) => {

  const swapArrow = isOpen ? <img className="dropdown__arrow" src={arrowDropUp} alt="Arrow Drop Up" /> : <img className="dropdown__arrow" src={arrowDropDown} alt="Arrow Drop Down" /> 

  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={click}>{title} {swapArrow}</button>
      {isOpen && <ul className="dropdown__menu">{children}</ul>}
    </div>
  );
};

export default Dropdown;
