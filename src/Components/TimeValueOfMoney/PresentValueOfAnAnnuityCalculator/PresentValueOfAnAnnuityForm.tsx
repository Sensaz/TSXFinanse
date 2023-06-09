import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { Input, SelectInput, parseInputState } from '../../Global'
import { presentValueOfAnAnnuitySelectProperty } from '../../../assets'
import '../../../Styles/Form.sass'

interface PresentValueOfASingleFlowCalculatorProps {
  expectedAnnuity: number
  duration: number
  requiredInterestRate: number
  handleSetExpectedAnnuity: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetDuration: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetRequiredInterestRate: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetAnnuityRecived: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetOptionDuration: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetAnnuityCapitalization: (value: ChangeEvent<HTMLInputElement>) => void
  calculate: (value: React.MouseEvent<HTMLButtonElement>) => void
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

const PresentValueOfAnAnnuityForm = ({
  expectedAnnuity,
  duration,
  requiredInterestRate,
  handleSetExpectedAnnuity,
  handleSetDuration,
  handleSetRequiredInterestRate,
  handleSetAnnuityRecived,
  handleSetOptionDuration,
  handleSetAnnuityCapitalization,
  calculate,
}: PresentValueOfASingleFlowCalculatorProps) => {
  const navigationForSmallDeviceState = useSelector(
    (state: NavigationForSmallDeviceType) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector(
    (state: ModalStoreStateType) => state.modalStore.flag
  )

  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const {
    propertyForSetAnnuityRecived,
    propertyForSetOptionDuration,
    propertyForSetAnnuityCapitalization,
  } = presentValueOfAnAnnuitySelectProperty
  return (
    <form className="form">
      <div className="form__group">
        <Input
          inputState={parseInputState(expectedAnnuity)}
          handleSetInputState={handleSetExpectedAnnuity}
          content="Oczekiwana Renta"
        />
        <SelectInput
          handleSetSelectState={handleSetAnnuityRecived}
          property={propertyForSetAnnuityRecived}
        />
      </div>
      <div className="form__group">
        <Input
          inputState={parseInputState(duration)}
          handleSetInputState={handleSetDuration}
          content="Czas trwania"
        />

        <SelectInput
          handleSetSelectState={handleSetOptionDuration}
          property={propertyForSetOptionDuration}
        />

        <SelectInput
          handleSetSelectState={handleSetAnnuityCapitalization}
          property={propertyForSetAnnuityCapitalization}
        />
      </div>

      <div className="form__group">
        <Input
          inputState={parseInputState(requiredInterestRate)}
          handleSetInputState={handleSetRequiredInterestRate}
          content="Wymagana Stopa zwrotu w %"
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

export default PresentValueOfAnAnnuityForm
