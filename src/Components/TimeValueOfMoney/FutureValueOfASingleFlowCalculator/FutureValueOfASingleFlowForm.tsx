import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { Input, SelectInput } from '../../Global'
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
    (state: any) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)

  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const { propertyForSetOptionDuration, propertyForSetInterestCapitalization } =
    valueOfASingleFlowSelectProperty

  return (
    <form className="form">
      <div className="form__group">
        <Input
          inputState={`${
            startValue <= 0 || Number.isNaN(startValue) ? '' : startValue
          }`}
          handleSetInputState={handleSetStartValue}
          content="Kwota początkowa"
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
      </div>

      <div className="form__group">
        <Input
          inputState={`${
            interestRate <= 0 || Number.isNaN(interestRate) ? '' : interestRate
          }`}
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
