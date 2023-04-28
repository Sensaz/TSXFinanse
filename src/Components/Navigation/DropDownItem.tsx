import { MouseEventHandler, ReactNode } from 'react'
import { NavLink, To } from 'react-router-dom'


interface MyComponentProps {
  click: MouseEventHandler<HTMLAnchorElement>;
  path: To;
  children: ReactNode;
}


const DropDownItem = ({ click, path, children }: MyComponentProps) => {
  
  return (
    <li className="dropdown__item">
      <NavLink onClick={click} className="dropdown__item--lowerLevel" to={path}>{children}</NavLink>
    </li>
  )
}

export default DropDownItem