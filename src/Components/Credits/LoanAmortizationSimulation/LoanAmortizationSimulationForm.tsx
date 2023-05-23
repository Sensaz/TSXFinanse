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

  const {
    propertyForSetOptionDuration,
    propertyForSetPaymentPeriodOfInstallment,
    propertyForSetInterestAccrualMethod,
    propertyForSetDoesTheBankChargeACommission,
    propertyForSetLoanRepaymentMethod,
  } = loanAmortizationSimulationSelectProperty

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
          inputState={`${
            marginOfTheBank <= 0 || Number.isNaN(marginOfTheBank)
              ? ''
              : marginOfTheBank
          }`}
          handleSetInputState={handleSetMarginOfTheBank}
          content="Marża banku w %"
        />

        <SelectInput
          handleSetSelectState={handleSetInterestAccrualMethod}
          property={propertyForSetInterestAccrualMethod}
        />
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
