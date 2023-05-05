import { ChangeEvent } from 'react'
import '../../../Styles/Form.sass'
import { Input, SelectInput, SelectOption  } from '../../Global'

interface PresentValueOfASingleFlowCalculatorProps {
  expectedAnnuity: string;
  duration: string;
  requiredInterestRate: string;
  handleSetExpectedAnnuity: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetDuration: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetRequiredInterestRate: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetAnnuityRecived: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetOptionDuration: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetAnnuityCapitalization: (value: ChangeEvent<HTMLInputElement>) => void;
  calculate: (value: React.MouseEvent<HTMLButtonElement>) => void;
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
  calculate
}: PresentValueOfASingleFlowCalculatorProps) => {
  
  
  return (
    <form className="form">

      <div className='form__group'>
        <Input inputState={expectedAnnuity} handleSetInputState={handleSetExpectedAnnuity} content="Oczekiwana Renta" />
        <SelectInput handleSetSelectState={handleSetAnnuityRecived}>
          <SelectOption value=''>Renta otrzymywana z</SelectOption>
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

        <SelectInput handleSetSelectState={handleSetAnnuityCapitalization}>
          <SelectOption value=''>Renta otrzymywana co</SelectOption>
          <SelectOption value='AnnuityRecivedAnnually'>Rok</SelectOption>
          <SelectOption value='AnnuityRecivedSemiAnnually'>Pół roku</SelectOption>
          <SelectOption value='AnnuityRecivedQuarterly'>Kwartał</SelectOption>
          <SelectOption value='AnnuityRecivedMonthyly'>Miesiąc</SelectOption>
        </SelectInput>
        </div>

        <div className='form__group'>
        
          <Input inputState={requiredInterestRate} handleSetInputState={handleSetRequiredInterestRate} content="Wymagana Stopa zwrotu w %" />

        </div>

      <div className='form__group--button'>
        <button className='form__button' onClick={calculate}>Oblicz</button>
      </div>
    </form>
  );
};

export default PresentValueOfAnAnnuityForm;
