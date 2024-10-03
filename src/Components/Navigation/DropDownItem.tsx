import { ReactNode /* MouseEventHandler  */ } from 'react'
import { NavLink, To } from 'react-router-dom'

interface MyComponentProps {
  click: any // TODO: To sie nie zgdaza MouseEventHandler<HTMLAnchorElement>
  path: To
  children: ReactNode
}

const DropDownItem = ({ click, path, children }: MyComponentProps) => {
  return (
    <li className="navigation__dropdown-item">
      <NavLink onClick={click} className="navigation__dropdown-link" to={path}>
        {children}
      </NavLink>
    </li>
  )
}

export default DropDownItem
