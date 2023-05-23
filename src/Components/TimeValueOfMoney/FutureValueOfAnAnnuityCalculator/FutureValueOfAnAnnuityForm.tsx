import { ChangeEvent, MouseEvent } from 'react'
import { useSelector } from 'react-redux'

import { Input, SelectInput } from '../../Global'
import { futureValueOfAnAnnuitySelectProperty } from '../../../assets'
import '../../../Styles/Form.sass'

interface CompoundInterestFormProps {
  pensionAmount: number
  duration: number
  interestRate: number
  handleSetPenstionAmount: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetDuration: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetInterestRate: (value: ChangeEvent<HTMLInputElement>) => void

  handleSetAnnuityPaymentOption: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetAnnuityPaymentFrequency: (
    value: ChangeEvent<HTMLInputElement>
  ) => void

  handleSetOptionDuration: (value: ChangeEvent<HTMLInputElement>) => void
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

const FutureValueOfAnAnnuityForm = ({
  pensionAmount,
  duration,
  interestRate,
  handleSetPenstionAmount,
  handleSetDuration,
  handleSetInterestRate,
  handleSetAnnuityPaymentOption,
  handleSetAnnuityPaymentFrequency,
  handleSetOptionDuration,
  calculate,
}: CompoundInterestFormProps) => {
  const navigationForSmallDeviceState = useSelector(
    (state: NavigationForSmallDeviceType) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector(
    (state: ModalStoreStateType) => state.modalStore.flag
  )

  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const {
    propertyForSetAnnuityPaymentOption,
    propertyForSetOptionDuration,
    propertyForSetAnnuityPaymentFrequency,
  } = futureValueOfAnAnnuitySelectProperty

  return (
    <form className="form">
      <div className="form__group">
        <Input
          inputState={`${
            pensionAmount <= 0 || Number.isNaN(pensionAmount)
              ? ''
              : pensionAmount
          }`}
          handleSetInputState={handleSetPenstionAmount}
          content="Wysokość Renty"
        />
        <SelectInput
          handleSetSelectState={handleSetAnnuityPaymentOption}
          property={propertyForSetAnnuityPaymentOption}
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
          handleSetSelectState={handleSetAnnuityPaymentFrequency}
          property={propertyForSetAnnuityPaymentFrequency}
        />
      </div>
      <div className="form__group">
        <Input
          inputState={`${
            interestRate <= 0 || Number.isNaN(interestRate) ? '' : interestRate
          }`}
          handleSetInputState={handleSetInterestRate}
          content="Roczne Oprocentowanie w %"
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

export default FutureValueOfAnAnnuityForm
