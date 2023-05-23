import { ReactNode, MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import DropDownItem from './DropDownItem'

interface ContentElementType {
  id: number
  info: string
  path: string
}

interface ContentType {
  [key: string]: ContentElementType[]
}

interface MyComponentProps {
  isOpen: boolean
  click: (value: MouseEvent<HTMLButtonElement>) => void
  title: ReactNode
  content: ContentType
}

interface NavigationForSmallDeviceType {
  navigationForSmallDevice: {
    flag: boolean
  }
}

interface ModalStoreStateType {
  modalStore: {
    flag: boolean
  }
}

const DropDown = ({ isOpen, click, title, content }: MyComponentProps) => {
  const navigationForSmallDeviceState = useSelector(
    (state: NavigationForSmallDeviceType) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector(
    (state: ModalStoreStateType) => state.modalStore.flag
  )

  const checkTabIndex =
    navigationForSmallDeviceState ||
    (!modalStoreState && window.innerWidth >= 1091)
      ? 1
      : -1

  const swapArrow = isOpen ? 'navigation__dropdown-arrow--top' : ''

  const checkButtonToggleMenu = isOpen
    ? 'navigation__dropdown-button--open'
    : ''

  const result = content.map(({ id, info, path }: ContentElementType) => (
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
