import { useSelector } from 'react-redux'
import { ChangeEvent, MouseEvent, useEffect } from 'react'
import '../../../Styles/Form.sass'
import { loanAmortizationSimulationSelectProperty } from '../../../assets'
import { Input, SelectInput } from '../../Global'

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
    (state: NavigationForSmallDeviceType) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector(
    (state: ModalStoreStateType) => state.modalStore.flag
  )
  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const {
    propertyForSetOptionDuration,
    propertyForSetPaymentPeriodOfInstallment,
    propertyForSetInterestAccrualMethod,
    propertyForSetDoesTheBankChargeACommission,
    propertyForSetLoanRepaymentMethod,
  } = loanAmortizationSimulationSelectProperty

  const handleInputState = (stateValue: number) => {
    return stateValue <= 0 || Number.isNaN(stateValue)
      ? ''
      : stateValue.toString()
  }


  const checkDoesTheBankChargeACommission = doesTheBankChargeACommission ===
    'ChargesAFee' && (
    <Input
      inputState={handleInputState(commisionFee)}
      handleSetInputState={handleSetCommisionFee}
      inputRequired={false}
      content="Wysokość Prowizji w %"
    />
  )

  return (
    <form className="form">
      <div className="form__group">
        <Input
          inputState={handleInputState(loanValue)}
          handleSetInputState={handleSetLoanValue}
          content="Wysokość Kredytu"
        />
      </div>
      <div className="form__group">
        <Input
          inputState={handleInputState(duration)}
          handleSetInputState={handleSetDuration}
          content="Czas trwania"
        />
        <SelectInput
          handleSetSelectState={handleSetOptionDuration}
          property={propertyForSetOptionDuration}
        />

        <SelectInput
          handleSetSelectState={handleSetPaymentPeriodOfInstallment}
          property={propertyForSetPaymentPeriodOfInstallment}
        />
      </div>

      <div className="form__group">
        <Input
          inputState={handleInputState(marginOfTheBank)}
          handleSetInputState={handleSetMarginOfTheBank}
          content="Marża banku w %"
        />

        <SelectInput
          handleSetSelectState={handleSetInterestAccrualMethod}
          property={propertyForSetInterestAccrualMethod}
        />
      </div>
      <div className="form__group">
        {checkDoesTheBankChargeACommission}
        <SelectInput
          handleSetSelectState={handleSetDoesTheBankChargeACommission}
          property={propertyForSetDoesTheBankChargeACommission}
        />
      </div>
      <div className="form__group">
        <SelectInput
          handleSetSelectState={handleSetLoanRepaymentMethod}
          property={propertyForSetLoanRepaymentMethod}
        />
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
