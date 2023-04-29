import { ChangeEvent, useState } from 'react'
import '../../../Styles/Form.sass'
import { Input, SelectInput, SelectOption  } from '../../Global'

interface CompoundInterestFormProps {
  startValue: string;
  duration: string;
  interestRate: string;
  additionalPaymentAmount: string;
  optionDuration: string;
  interestCapitalization: string;
  additionalPaymentFrequency: string;
  handleSetStartValue: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetDuration: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetInterestRate: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetAdditionalPaymentAmount: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetOptionDuration: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetInterestCapitalization: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetAdditionalPaymentFrequency: (value: ChangeEvent<HTMLInputElement>) => void;
}

const CompoundInterestForm = ({
  startValue,
  duration,
  interestRate,
  additionalPaymentAmount,
  optionDuration,
  interestCapitalization,
  additionalPaymentFrequency,
  handleSetStartValue,
  handleSetDuration,
  handleSetInterestRate,
  handleSetAdditionalPaymentAmount,
  handleSetOptionDuration,
  handleSetInterestCapitalization,
  handleSetAdditionalPaymentFrequency
}: CompoundInterestFormProps) => {
  
  const [checkPaymentFrequencyValue, setCheckPaymentFrequencyValue] = useState("")

  const calculate = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    // console.log("Kwota Początkowa: " + startValue)
    // console.log("-----------------")
    // console.log("Czas Trwania: " + duration + " Podany w: " + optionDuration)
    // console.log("-----------------")
    // console.log("Roczne oprocentowanie: " + interestRate + "% w kapitalizacji: " + interestCapitalization)
    // console.log("-----------------")
    // console.log("Wysokość Dodatkowych Wpłat: " + additionalPaymentAmount + "Występują one co: " + additionalPaymentFrequency)
  }
  
  const handleSetCheckPaymentFrequencyValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPaymentFrequencyValue(e?.target?.value);
    console.log(checkPaymentFrequencyValue?.length)
  };
  
  
  return (
    <form className="form">

      <div className='form__group'>
        <Input inputState={startValue} handleSetInputState={handleSetStartValue} content="Kwota początkowa" />
      </div>
      <div className='form__group'>
        <Input inputState={duration} handleSetInputState={handleSetDuration} content="Czas trwania" />

        <SelectInput handleSetSelectState={handleSetOptionDuration}>
          <SelectOption value=''>Podany</SelectOption>
          <SelectOption value='DurationInMonths'>W Miesiącach</SelectOption>
          <SelectOption value='DurationInYears'>W Latach</SelectOption>
        </SelectInput>
        </div>

        <div className='form__group'>
        
          <Input inputState={interestRate} handleSetInputState={handleSetInterestRate} content="Roczne Oprocentowanie w %" />

          <SelectInput handleSetSelectState={handleSetInterestCapitalization}>
            <SelectOption value=''>Kapitalizacja Oprocentowania</SelectOption>
            <SelectOption value='AnnualCapitalization'>Roczna</SelectOption>
            <SelectOption value='SemiAnnualCapitalization'>Półroczna</SelectOption>
            <SelectOption value='QuarterlyCapitalization'>Kwartalna</SelectOption>
            <SelectOption value='MonthlyCapitalization'>Miesięczna</SelectOption>
            <SelectOption value='DailyCapitalization'>Dzienna</SelectOption>
            <SelectOption value='ContinuousCapitalization'>Ciągła</SelectOption>
          </SelectInput>

        </div>

        <div className='form__group'>
          <Input
            inputState={additionalPaymentAmount}
            handleSetInputState={handleSetAdditionalPaymentAmount}
            handleSwapOptionalState={handleSetCheckPaymentFrequencyValue}
            swapOptionalState={checkPaymentFrequencyValue}
            content="Dodatkowe Wpłaty"
          />

          <SelectInput
            handleSetSelectState={handleSetAdditionalPaymentFrequency}
            handleSwapOptionalState={handleSetCheckPaymentFrequencyValue}
            swapOptionalState={checkPaymentFrequencyValue}
          >
            <SelectOption value="">Częstotliwość Dodatkowych Wpłat</SelectOption>
            <SelectOption value='AnnualAdditionalPayment'>Rocznie</SelectOption>
            <SelectOption value='SemiAnnualAdditionalPayment'>Półrocznie</SelectOption>
            <SelectOption value='QuarterlyAdditionalPayment'>Kwartalnie</SelectOption>
            <SelectOption value='MonthlyAdditionalPayment'>Miesięcznie</SelectOption>
          </SelectInput>
        </div>
      
      <button className='form__button' onClick={calculate}>Oblicz</button>
    </form>
  );
};

export default CompoundInterestForm;
