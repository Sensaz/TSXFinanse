import { ChangeEvent } from 'react'
import { FormButton, Input, SelectInput, parseInputState } from '../../Global'
import { valueOfASingleFlowSelectProperty } from '../../../assets'
import '../../../Styles/Form.sass'

interface PresentValueOfASingleFlowCalculatorProps {
  expectedFinalValue: number
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

const PresentValueOfASingleFlowForm = ({
  expectedFinalValue,
  duration,
  interestRate,
  handleSetStartValue,
  handleSetDuration,
  handleSetInterestRate,
  handleSetOptionDuration,
  handleSetInterestCapitalization,
  calculate,
}: PresentValueOfASingleFlowCalculatorProps) => {
  const { propertyForSetOptionDuration, propertyForSetInterestCapitalization } =
    valueOfASingleFlowSelectProperty

  return (
    <form className="form">
      <div className="form__group">
        <Input
          inputState={parseInputState(expectedFinalValue)}
          handleSetInputState={handleSetStartValue}
          content="Oczekiwana Wartość Końcowa"
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
          content="Wymagana Stopa zwrotu w %"
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

export default PresentValueOfASingleFlowForm
