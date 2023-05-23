import { ReactNode, MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import DropDownItem from './DropDownItem'

interface MyComponentProps {
  isOpen: boolean
  click: (value: MouseEvent<HTMLButtonElement>) => void
  title: ReactNode
  content: any
}

const DropDown = ({ isOpen, click, title, content }: MyComponentProps) => {
  const navigationForSmallDeviceState = useSelector(
    (state: any) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)

  const checkTabIndex =
    navigationForSmallDeviceState ||
    (!modalStoreState && window.innerWidth >= 1091)
      ? 1
      : -1

  const swapArrow = isOpen ? 'navigation__dropdown-arrow--top' : ''

  const checkButtonToggleMenu = isOpen
    ? 'navigation__dropdown-button--open'
    : ''

  const result = content.map(({ id, info, path }): any => (
    <DropDownItem key={id} click={click} path={path}>
      {info}
    </DropDownItem>
  ))

  return (
    <div className="navigation__dropdown">
      <button
        tabIndex={checkTabIndex}
        className={`navigation__dropdown-button ${checkButtonToggleMenu}`}
        onClick={click}
      >
        {title}
        <span className={`navigation__dropdown-arrow ${swapArrow}`}></span>
      </button>
      {isOpen && <ul className="navigation__dropdown-menu">{result}</ul>}
    </div>
  )
}

export default DropDown
