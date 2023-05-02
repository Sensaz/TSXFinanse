import { ChangeEvent, MouseEvent } from 'react'
import '../../../Styles/Form.sass'
import { Input, SelectInput, SelectOption  } from '../../Global'

interface CompoundInterestFormProps {
  pensionAmount: string;
  duration: string;
  interestRate: string;
  handleSetPenstionAmount: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetDuration: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetInterestRate: (value: ChangeEvent<HTMLInputElement>) => void;


  handleSetAnnuityPaymentOption: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetAnnuityPaymentFrequency: (value: ChangeEvent<HTMLInputElement>) => void;


  handleSetOptionDuration: (value: ChangeEvent<HTMLInputElement>) => void;
  calculate: (value: MouseEvent<HTMLButtonElement>) => void;
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
  calculate
}: CompoundInterestFormProps) => {
  
  
  return (
    <form className="form">

      <div className='form__group'>
        <Input inputState={pensionAmount} handleSetInputState={handleSetPenstionAmount} content="Wysokość Renty" />
        <SelectInput handleSetSelectState={handleSetAnnuityPaymentOption}>
          <SelectOption value=''>Renta płatna z</SelectOption>
          <SelectOption value='AnnuityPaidInAdvance'>Góry</SelectOption>
          <SelectOption value='AnnuityPayableInAdvance'>Dołu</SelectOption>
        </SelectInput>
      </div>
        <div className='form__group'>
          <Input inputState={duration} handleSetInputState={handleSetDuration} content="Czas trwania" />

        <SelectInput handleSetSelectState={handleSetOptionDuration}>
          <SelectOption value=''>Podany</SelectOption>
          <SelectOption value='DurationInMonths'>W Miesiącach</SelectOption>
          <SelectOption value='DurationInYears'>W Latach</SelectOption>
        </SelectInput>
        <SelectInput handleSetSelectState={handleSetAnnuityPaymentFrequency}>
          <SelectOption value=''>Renta płatna co</SelectOption>
          <SelectOption value='AnnuityPaidAnnually'>Rok</SelectOption>
          <SelectOption value='AnnuityPaidSemiAnnually'>Pół roku</SelectOption>
          <SelectOption value='AnnuityPaidQuarterly'>Kwartał</SelectOption>
          <SelectOption value='AnnuityPaidMonthyly'>Miesiąc</SelectOption>
        </SelectInput>
        </div>

        <div className='form__group'>
          <Input inputState={interestRate} handleSetInputState={handleSetInterestRate} content="Roczne Oprocentowanie w %" />
        </div>

      <div className='form__group--button'>
        <button className='form__button' onClick={calculate}>Oblicz</button>
      </div>
    </form>
  );
};

export default FutureValueOfAnAnnuityForm;
