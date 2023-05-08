import { ChangeEvent } from 'react'
import '../../../Styles/Form.sass'
import { Input, SelectInput, SelectOption  } from '../../Global'

interface PresentValueOfASingleFlowCalculatorProps {
  expectedFinalValue: number;
  duration: number;
  interestRate: number;
  handleSetStartValue: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetDuration: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetInterestRate: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetOptionDuration: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetInterestCapitalization: (value: ChangeEvent<HTMLInputElement>) => void;
  calculate: (value: React.MouseEvent<HTMLButtonElement>) => void;
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
  calculate
}: PresentValueOfASingleFlowCalculatorProps) => {
  
  
  return (
    <form className="form">

      <div className='form__group'>
        <Input inputState={`${expectedFinalValue <= 0 || Number.isNaN(expectedFinalValue) ? "" : expectedFinalValue}`} handleSetInputState={handleSetStartValue} content="Oczekiwana Wartość Końcowa" />
      </div>
      <div className='form__group'>
        <Input inputState={`${duration <= 0 || Number.isNaN(duration) ? "" : duration}`} handleSetInputState={handleSetDuration} content="Czas trwania" />

        <SelectInput handleSetSelectState={handleSetOptionDuration}>
          <SelectOption value=''>Podany</SelectOption>
          <SelectOption value='DurationInMonths'>W Miesiącach</SelectOption>
          <SelectOption value='DurationInYears'>W Latach</SelectOption>
        </SelectInput>
        </div>

        <div className='form__group'>
        
          <Input inputState={`${interestRate <= 0 || Number.isNaN(interestRate) ? "" : interestRate}`} handleSetInputState={handleSetInterestRate} content="Wymagana Stopa zwrotu w %" />

          <SelectInput handleSetSelectState={handleSetInterestCapitalization}>
            <SelectOption value=''>Kapitalizacja Stopy Zwrotu</SelectOption>
            <SelectOption value='AnnualCapitalization'>Roczna</SelectOption>
            <SelectOption value='SemiAnnualCapitalization'>Półroczna</SelectOption>
            <SelectOption value='QuarterlyCapitalization'>Kwartalna</SelectOption>
            <SelectOption value='MonthlyCapitalization'>Miesięczna</SelectOption>
            <SelectOption value='DailyCapitalization'>Dzienna</SelectOption>
            <SelectOption value='ContinuousCapitalization'>Ciągła</SelectOption>
          </SelectInput>

        </div>

      <div className='form__group--button'>
        <button className='form__button' onClick={calculate}>Oblicz</button>
      </div>
    </form>
  );
};

export default PresentValueOfASingleFlowForm;
