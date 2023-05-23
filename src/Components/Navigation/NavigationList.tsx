import { Dispatch, MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'
import DropDown from './DropDown'
import DropDownItem from './DropDownItem'
import { useDispatch } from 'react-redux'
import { navigationForSmallDeviceValue } from '../Global/globalStore'

type DropDownListType = {
  [key: string]: Dispatch<React.SetStateAction<boolean>>
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
}: any) => {
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

  const nav = [
    {
      id: 0,
      content: (
        <DropDown
          isOpen={isTimeValueOfMoneyDropDownOpen}
          click={handleTimeValueOfMoneyDropDownOpen}
          title="Wartość Pieniądza w czasie"
        >
          <>
            <DropDownItem
              click={handleTimeValueOfMoneyDropDownOpen}
              path="TimeValueOfMoney/FutureValueOfASingleFlowCalculator"
            >
              Wartość przyszła pojedynczego przepływu
            </DropDownItem>

            <DropDownItem
              click={handleTimeValueOfMoneyDropDownOpen}
              path="TimeValueOfMoney/PresentValueOfASingleFlowCalculator"
            >
              Wartość obecna pojedynczego przepływu
            </DropDownItem>

            <DropDownItem
              click={handleTimeValueOfMoneyDropDownOpen}
              path="TimeValueOfMoney/FutureValueOfAnAnnuityCalculator"
            >
              Wartość przyszła renty
            </DropDownItem>
            <DropDownItem
              click={handleTimeValueOfMoneyDropDownOpen}
              path="TimeValueOfMoney/PresentValueOfAnAnnuityCalculator"
            >
              Wartość obecna renty
            </DropDownItem>

            <li className="navigation__DropDown-divider"></li>

            <DropDownItem
              click={handleTimeValueOfMoneyDropDownOpen}
              path="KnowledgeBase/FinancialInstruments"
            >
              Jak to działa?
            </DropDownItem>
          </>
        </DropDown>
      ),
    },
    {
      id: 1,
      content: (
        <DropDown
          isOpen={isTimeCreditsDropDownOpen}
          click={handleTimeCreditsDropDownOpen}
          title="Kredyty"
        >
          <>
            <DropDownItem
              click={handleTimeCreditsDropDownOpen}
              path="Credits/LoanAmortizationSimulation"
            >
              Symulacja Amortyzacji Kredytu
            </DropDownItem>

            <DropDownItem
              click={handleTimeCreditsDropDownOpen}
              path="Credits/CreditCalculator"
            >
              {' '}
              Kalkulator Zdolności Kredytowej
            </DropDownItem>

            <li className="navigation__DropDown-divider"></li>

            <DropDownItem
              click={handleTimeCreditsDropDownOpen}
              path="KnowledgeBase/FinancialInstruments"
            >
              Jak to działa?
            </DropDownItem>
          </>
        </DropDown>
      ),
    },
    {
      id: 2,
      content: (
        <DropDown
          isOpen={isFinancialInstrumentsValuationDropDownOpen}
          click={handleFinancialInstrumentsValuationDropDownOpen}
          title="Wyceny"
        >
          <>
            <DropDownItem
              click={handleFinancialInstrumentsValuationDropDownOpen}
              path="FinancialInstrumentsValuation/BondValuationCalculator"
            >
              Obligacji
            </DropDownItem>

            <DropDownItem
              click={handleFinancialInstrumentsValuationDropDownOpen}
              path="FinancialInstrumentsValuation/EquitiesValuationCalculator"
            >
              Akcji
            </DropDownItem>

            <DropDownItem
              click={handleFinancialInstrumentsValuationDropDownOpen}
              path="FinancialInstrumentsValuation/OptionValutionCalculator"
            >
              Opcji
            </DropDownItem>

            <DropDownItem
              click={handleFinancialInstrumentsValuationDropDownOpen}
              path="FinancialInstrumentsValuation/FuturesAndForwardsCalculator"
            >
              Kontraktu Futures i Forword
            </DropDownItem>

            <DropDownItem
              click={handleFinancialInstrumentsValuationDropDownOpen}
              path="FinancialInstrumentsValuation/SwapPricingCalculator"
            >
              Kontraktu Swap
            </DropDownItem>

            <li className="navigation__DropDown-divider"></li>

            <DropDownItem
              click={handleFinancialInstrumentsValuationDropDownOpen}
              path="KnowledgeBase/FinancialInstruments"
            >
              Jak to działa?
            </DropDownItem>
          </>
        </DropDown>
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
        >
          <>
            <DropDownItem
              click={handleKnowledgeBaseDropDownOpen}
              path="KnowledgeBase/FinancialInstruments"
            >
              Instrumenty Finansowe
            </DropDownItem>

            <DropDownItem
              click={handleKnowledgeBaseDropDownOpen}
              path="KnowledgeBase/InvestmentStrategies"
            >
              Strategie Inwestycyjne
            </DropDownItem>

            <DropDownItem
              click={handleKnowledgeBaseDropDownOpen}
              path="KnowledgeBase/SolutionsInApp"
            >
              Opis Rozwiązań w Aplikacji
            </DropDownItem>
          </>
        </DropDown>
      ),
    },
    {
      id: 5,
      path: '/AboutMe',
      content: 'O mnie',
    },
  ]

  const links = nav.map((link) => (
    <li className="navigation__item" key={link.id}>
      {typeof link.content === 'string' ? (
        <NavLink
          tabIndex={checkTabIndex}
          onClick={handleHamburgerToggleClass}
          className="navigation__link"
          to={link.path}
        >
          {link.content}
        </NavLink>
      ) : (
        link.content
      )}
    </li>
  ))

  return <>{links}</>
}

export default NavigationList