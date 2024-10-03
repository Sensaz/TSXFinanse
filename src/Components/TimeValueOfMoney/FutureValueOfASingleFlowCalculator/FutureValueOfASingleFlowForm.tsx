import { ChangeEvent } from 'react'
import { FormButton, Input, SelectInput, parseInputState } from '../../Global'
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

      <FormButton calculate={calculate} />
    </form>
  )
}

export default CompoundInterestForm
