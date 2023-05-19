import { useSelector } from 'react-redux'
import { ChangeEvent, MouseEvent, useEffect } from 'react'
import '../../../Styles/Form.sass'
import { Input, SelectInput, SelectOption } from '../../Global'

interface LoanAmortizationSimulationFormProps {
  loanValue: number
  duration: number
  marginOfTheBank: number
  commisionFee: number
  doesTheBankChargeACommission: string
  setCommisionFee: (value: number) => void
  handleSetLoanValue: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetDuration: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetMarginOfTheBank: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetCommisionFee: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetOptionDuration: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetPaymentPeriodOfInstallment: (
    value: ChangeEvent<HTMLInputElement>
  ) => void
  handleSetInterestAccrualMethod: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetDoesTheBankChargeACommission: (
    value: ChangeEvent<HTMLInputElement>
  ) => void
  handleSetLoanRepaymentMethod: (value: ChangeEvent<HTMLInputElement>) => void
  calculate: (value: MouseEvent<HTMLButtonElement>) => void
}

const LoanAmortizationSimulationForm = ({
  loanValue,
  duration,
  marginOfTheBank,
  commisionFee,
  doesTheBankChargeACommission,
  setCommisionFee,
  handleSetLoanValue,
  handleSetDuration,
  handleSetMarginOfTheBank,
  handleSetCommisionFee,
  handleSetOptionDuration,
  handleSetPaymentPeriodOfInstallment,
  handleSetInterestAccrualMethod,
  handleSetDoesTheBankChargeACommission,
  handleSetLoanRepaymentMethod,
  calculate,
}: LoanAmortizationSimulationFormProps) => {
  useEffect(() => {
    setCommisionFee(0)
  }, [doesTheBankChargeACommission])
  const navigationForSmallDeviceState = useSelector(
    (state: any) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)
  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1
  return (
    <form className="form">
      <div className="form__group">
        <Input
          inputState={`${
            loanValue <= 0 || Number.isNaN(loanValue) ? '' : loanValue
          }`}
          handleSetInputState={handleSetLoanValue}
          content="Wysokość Kredytu"
        />
      </div>
      <div className="form__group">
        <Input
          inputState={`${
            duration <= 0 || Number.isNaN(duration) ? '' : duration
          }`}
          handleSetInputState={handleSetDuration}
          content="Czas trwania"
        />

        <SelectInput handleSetSelectState={handleSetOptionDuration}>
          <SelectOption value="">Podany</SelectOption>
          <SelectOption value="DurationInMonths">W Miesiącach</SelectOption>
          <SelectOption value="DurationInYears">W Latach</SelectOption>
        </SelectInput>
        <SelectInput handleSetSelectState={handleSetPaymentPeriodOfInstallment}>
          <SelectOption value="">
            Okres Płatności Raty Występuje co
          </SelectOption>
          <SelectOption value="DurationInYears">Rok</SelectOption>
          <SelectOption value="DurationInHalfYears">Pół roku</SelectOption>
          <SelectOption value="DurationInQarters">Kwartał</SelectOption>
          <SelectOption value="DurationInMonths">Miesiąc</SelectOption>
        </SelectInput>
      </div>

      <div className="form__group">
        <Input
          inputState={`${
            marginOfTheBank <= 0 || Number.isNaN(marginOfTheBank)
              ? ''
              : marginOfTheBank
          }`}
          handleSetInputState={handleSetMarginOfTheBank}
          content="Marża banku w %"
        />

        <SelectInput handleSetSelectState={handleSetInterestAccrualMethod}>
          <SelectOption value="">
            Metoda Pobierania Odsetek Przez Bank
          </SelectOption>
          <SelectOption value="InterestPaidInAdvance">Z Góry</SelectOption>
          <SelectOption value="InterestPaidInArrears">Z Dołu</SelectOption>
        </SelectInput>
      </div>
      <div className="form__group">
        {doesTheBankChargeACommission === 'ChargesAFee' && (
          <Input
            inputState={`${
              commisionFee <= 0 || Number.isNaN(commisionFee)
                ? ''
                : commisionFee
            }`}
            handleSetInputState={handleSetCommisionFee}
            content="Wysokość Prowizji w %"
          />
        )}
        <SelectInput
          handleSetSelectState={handleSetDoesTheBankChargeACommission}
        >
          <SelectOption value="">Czy Bank Pobiera Prowizje</SelectOption>
          <SelectOption value="ChargesAFee">Tak</SelectOption>
          <SelectOption value="DoesNotChargeAFee">Nie</SelectOption>
        </SelectInput>
      </div>
      <div className="form__group">
        <SelectInput handleSetSelectState={handleSetLoanRepaymentMethod}>
          <SelectOption value="">Metoda Spłacania kredytu</SelectOption>
          <SelectOption value="DecreasingInstallments">
            Równe Raty Kapitałowe (Rata Malejąca)
          </SelectOption>
          <SelectOption value="FixedInstallments">
            Równe Raty Płatności Kredytu (Rata Stała)
          </SelectOption>
        </SelectInput>
      </div>

      <div className="form__group--button">
        <button
          tabIndex={checkTabIndex}
          className="form__button"
          onClick={calculate}
        >
          Oblicz
        </button>
      </div>
    </form>
  )
}

export default LoanAmortizationSimulationForm
