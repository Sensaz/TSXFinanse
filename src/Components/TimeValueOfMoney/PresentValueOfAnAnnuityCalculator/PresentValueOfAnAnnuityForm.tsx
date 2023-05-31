import { ChangeEvent } from 'react'
import { FormButton, Input, SelectInput, parseInputState } from '../../Global'
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

      <FormButton calculate={calculate} />
    </form>
  )
}

export default PresentValueOfAnAnnuityForm
