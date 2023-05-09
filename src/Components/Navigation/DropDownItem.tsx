import { ReactNode, MouseEvent } from 'react'
import { NavLink, To } from 'react-router-dom'


interface MyComponentProps {
  click: (value: MouseEvent<HTMLButtonElement>) => void;
  path: To;
  children: ReactNode;
}


const DropDownItem = ({ click, path, children }: MyComponentProps) => {


  return (
    <li className="navigation__dropdown-item">
      <NavLink onClick={click} className="navigation__dropdown-link" to={path}>{children}</NavLink>
    </li>
  )
}

export default DropDownItem