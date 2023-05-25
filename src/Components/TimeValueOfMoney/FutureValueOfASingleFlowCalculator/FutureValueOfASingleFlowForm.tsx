import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { Input, SelectInput, parseInputState } from '../../Global'
import { valueOfASingleFlowSelectProperty } from '../../../assets'
import '../../../Styles/Form.sass'

interface CompoundInterestFormProps {
  startValue: number
  duration: number
  interestRate: number
  handleSetStartValue: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetDuration: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetInterestRate: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetOptionDuration: (value: ChangeEvent<HTMLInputElement>) => void
  handleSetInterestCapitalization: (
    value: ChangeEvent<HTMLInputElement>
  ) => void
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

const CompoundInterestForm = ({
  startValue,
  duration,
  interestRate,
  handleSetStartValue,
  handleSetDuration,
  handleSetInterestRate,
  handleSetOptionDuration,
  handleSetInterestCapitalization,
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

  const { propertyForSetOptionDuration, propertyForSetInterestCapitalization } =
    valueOfASingleFlowSelectProperty

  return (
    <form className="form">
      <div className="form__group">
        <Input
          inputState={parseInputState(startValue)}
          handleSetInputState={handleSetStartValue}
          content="Kwota początkowa"
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
      </div>

      <div className="form__group">
        <Input
          inputState={parseInputState(interestRate)}
          handleSetInputState={handleSetInterestRate}
          content="Roczne Oprocentowanie w %"
        />

        <SelectInput
          handleSetSelectState={handleSetInterestCapitalization}
          property={propertyForSetInterestCapitalization}
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

export default CompoundInterestForm
