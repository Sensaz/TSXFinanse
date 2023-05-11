import { ReactElement, ReactNode, MouseEvent } from 'react';
import { useSelector } from 'react-redux';


interface MyComponentProps {
  click: (value: MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  title: ReactNode;
  children: ReactElement<any>;
}

const Dropdown = ({ isOpen, click, title, children }:MyComponentProps) => {

  const navigationForSmallDeviceState = useSelector((state: any) => state.navigationForSmallDevice.flag)

  const showPhonButtonState = useSelector((state: any) => state.phoneButton.flag)
 
  const checkTabIndex = showPhonButtonState && navigationForSmallDeviceState ? 1 : -1

  const swapArrow = isOpen ? 'navigation__dropdown-arrow--top' : ''

  const checkButtonToggleMenu = isOpen ? 'navigation__dropdown-button--open' : ''

  return (
    <div className="navigation__dropdown">
      <button tabIndex={checkTabIndex} className={`navigation__dropdown-button ${checkButtonToggleMenu}`}onClick={click}>
        {title}
        <span className={`navigation__dropdown-arrow ${swapArrow}`}></span>
      </button>
      {isOpen && <ul className="navigation__dropdown-menu">{children}</ul>}
    </div>
  );
};

export default Dropdown;
