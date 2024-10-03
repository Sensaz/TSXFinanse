import { ChangeEvent, MouseEvent } from 'react'

import { FormButton, Input, SelectInput, parseInputState } from '../../Global'
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
  const {
    propertyForSetAnnuityPaymentOption,
    propertyForSetOptionDuration,
    propertyForSetAnnuityPaymentFrequency,
  } = futureValueOfAnAnnuitySelectProperty

  return (
    <form className="form">
      <div className="form__group">
        <Input
          inputState={parseInputState(pensionAmount)}
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
          inputState={parseInputState(duration)}
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
          inputState={parseInputState(interestRate)}
          handleSetInputState={handleSetInterestRate}
          content="Roczne Oprocentowanie w %"
        />
      </div>

      <FormButton calculate={calculate} />
    </form>
  )
}

export default FutureValueOfAnAnnuityForm
