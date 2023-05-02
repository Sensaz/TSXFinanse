import { ChangeEvent } from 'react'
import '../../../Styles/Form.sass'
import { Input, SelectInput, SelectOption  } from '../../Global'

interface CompoundInterestFormProps {
  startValue: string;
  duration: string;
  interestRate: string;
  handleSetStartValue: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetDuration: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetInterestRate: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetOptionDuration: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetInterestCapitalization: (value: ChangeEvent<HTMLInputElement>) => void;
  calculate: (value: React.MouseEvent<HTMLButtonElement>) => void;
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
  calculate
}: CompoundInterestFormProps) => {
  
  // const [checkPaymentFrequencyValue, setCheckPaymentFrequencyValue] = useState("")

  
  // const handleSetCheckPaymentFrequencyValue = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setCheckPaymentFrequencyValue(e?.target?.value);
  //   console.log(checkPaymentFrequencyValue?.length)
  // };
  
  
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

      <div className='form__group--button'>
        <button className='form__button' onClick={calculate}>Oblicz</button>
      </div>
    </form>
  );
};

export default CompoundInterestForm;
