import { useDispatch } from 'react-redux'
import { Dispatch, MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'
import DropDown from './DropDown'
import { navigationForSmallDeviceValue } from '../Global'
import { contentForDropDown } from '../../assets'

type DropDownListType = {
  [key: string]: Dispatch<React.SetStateAction<boolean>>
}

type NavigationListType = {
  setIsTimeValueOfMoneyDropDownOpen: Dispatch<React.SetStateAction<boolean>>
  setIsTimeCreditsDropDownOpen: Dispatch<React.SetStateAction<boolean>>
  setIsFinancialInstrumentsValuationDropDownOpen: Dispatch<
    React.SetStateAction<boolean>
  >
  setIsKnowledgeBaseDropDownOpen: Dispatch<React.SetStateAction<boolean>>
  isTimeValueOfMoneyDropDownOpen: boolean
  isTimeCreditsDropDownOpen: boolean
  isFinancialInstrumentsValuationDropDownOpen: boolean
  isKnowledgeBaseDropDownOpen: boolean
  checkTabIndex: number
  handleHamburgerToggleClass: () => void
}

const NavigationList = ({
  setIsTimeValueOfMoneyDropDownOpen,
  setIsTimeCreditsDropDownOpen,
  setIsFinancialInstrumentsValuationDropDownOpen,
  setIsKnowledgeBaseDropDownOpen,
  isTimeValueOfMoneyDropDownOpen,
  isTimeCreditsDropDownOpen,
  isFinancialInstrumentsValuationDropDownOpen,
  isKnowledgeBaseDropDownOpen,
  checkTabIndex,
  handleHamburgerToggleClass,
}: NavigationListType) => {
  const dispatch = useDispatch()

  const setNavigationForSmallDeviceFalse = () => {
    dispatch(navigationForSmallDeviceValue.setFalseFlag())
  }

  const dropdownList: DropDownListType = {
    setIsTimeCreditsDropDownOpen,
    setIsTimeValueOfMoneyDropDownOpen,
    setIsFinancialInstrumentsValuationDropDownOpen,
    setIsKnowledgeBaseDropDownOpen,
  }

  const handleDropDownOpen =
    (
      setDropDownState: React.Dispatch<React.SetStateAction<boolean>>,
      dropDownName: string
    ) =>
    (e: MouseEvent<HTMLButtonElement>) => {
      setDropDownState((prev) => !prev)
      const { [dropDownName]: selectedDropdownValue, ...restDropdowns } =
        dropdownList
      const target = e.target as HTMLAnchorElement
      if (target.className === 'navigation__dropdown-link') {
        setNavigationForSmallDeviceFalse()
      }
      for (const key in restDropdowns) {
        const dropdownFunction = restDropdowns[key]
        dropdownFunction(false)
      }
    }

  const handleTimeValueOfMoneyDropDownOpen = handleDropDownOpen(
    setIsTimeValueOfMoneyDropDownOpen,
    'setIsTimeValueOfMoneyDropDownOpen'
  )

  const handleTimeCreditsDropDownOpen = handleDropDownOpen(
    setIsTimeCreditsDropDownOpen,
    'setIsTimeCreditsDropDownOpen'
  )

  const handleFinancialInstrumentsValuationDropDownOpen = handleDropDownOpen(
    setIsFinancialInstrumentsValuationDropDownOpen,
    'setIsFinancialInstrumentsValuationDropDownOpen'
  )

  const handleKnowledgeBaseDropDownOpen = handleDropDownOpen(
    setIsKnowledgeBaseDropDownOpen,
    'setIsKnowledgeBaseDropDownOpen'
  )

  const {
    dropDownContentForTimeValueOfMoney,
    dropDownContentForCredits,
    dropDownContentForFinancialInstrumentValution,
    dropDownContentForKnowledgeBase,
  } = contentForDropDown

  const nav = [
    {
      id: 0,
      content: (
        <DropDown
          isOpen={isTimeValueOfMoneyDropDownOpen}
          click={handleTimeValueOfMoneyDropDownOpen}
          title="Wartość Pieniądza w czasie"
          content={dropDownContentForTimeValueOfMoney}
        />
      ),
    },
    {
      id: 1,
      content: (
        <DropDown
          isOpen={isTimeCreditsDropDownOpen}
          click={handleTimeCreditsDropDownOpen}
          title="Kredyty"
          content={dropDownContentForCredits}
        />
      ),
    },
    {
      id: 2,
      content: (
        <DropDown
          isOpen={isFinancialInstrumentsValuationDropDownOpen}
          click={handleFinancialInstrumentsValuationDropDownOpen}
          title="Wyceny"
          content={dropDownContentForFinancialInstrumentValution}
        />
      ),
    },
    {
      id: 3,
      path: '/InvestmentStrategyHelper',
      content: 'Dobór Strategii Inwestycyjnej',
    },
    {
      id: 4,
      content: (
        <DropDown
          isOpen={isKnowledgeBaseDropDownOpen}
          click={handleKnowledgeBaseDropDownOpen}
          title="Baza Wiedzy"
          content={dropDownContentForKnowledgeBase}
        />
      ),
    },
    {
      id: 5,
      path: '/AboutMe',
      content: 'O mnie',
    },
  ]

  const links = nav.map(({ id, content, path }) => (
    <li className="navigation__item" key={id}>
      {typeof content === 'string' ? (
        <NavLink
          tabIndex={checkTabIndex}
          onClick={handleHamburgerToggleClass}
          className="navigation__link"
          to={path || ''}
        >
          {content}
        </NavLink>
      ) : (
        content
      )}
    </li>
  ))

  return <>{links}</>
}

export default NavigationList
