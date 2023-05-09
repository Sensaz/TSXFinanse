import { ReactElement, ReactNode, MouseEvent } from 'react';


interface MyComponentProps {
  click: (value: MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  title: ReactNode;
  children: ReactElement<any>;
}

const Dropdown = ({ isOpen, click, title, children }:MyComponentProps) => {

  const swapArrow = isOpen ? 'navigation__dropdown-arrow--top' : ''

  const checkButtonToggleMenu = isOpen ? 'navigation__dropdown-button--open' : ''

  return (
    <div className="navigation__dropdown">
      <button className={`navigation__dropdown-button ${checkButtonToggleMenu}`}onClick={click}>
        {title}
        <span className={`navigation__dropdown-arrow ${swapArrow}`}></span>
      </button>
      {isOpen && <ul className="navigation__dropdown-menu">{children}</ul>}
    </div>
  );
};

export default Dropdown;
