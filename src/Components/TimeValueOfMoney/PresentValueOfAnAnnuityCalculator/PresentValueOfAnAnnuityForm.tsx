import { ChangeEvent } from 'react'
import '../../../Styles/Form.sass'
import { Input, SelectInput, SelectOption  } from '../../Global'
import { useSelector } from 'react-redux';

interface PresentValueOfASingleFlowCalculatorProps {
  expectedAnnuity: number;
  duration: number;
  requiredInterestRate: number;
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
  const navigationForSmallDeviceState = useSelector((state: any) => state.navigationForSmallDevice.flag)
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)

  const checkTabIndex = navigationForSmallDeviceState || modalStoreState ? -1 : 1
  
  return (
    <form className="form">

      <div className='form__group'>
        <Input inputState={`${expectedAnnuity <= 0 || Number.isNaN(expectedAnnuity) ? "" : expectedAnnuity}`} handleSetInputState={handleSetExpectedAnnuity} content="Oczekiwana Renta" />
        <SelectInput handleSetSelectState={handleSetAnnuityRecived}>
          <SelectOption value=''>Renta otrzymywana z</SelectOption>
          <SelectOption value='AnnuityPaidInAdvance'>Góry</SelectOption>
          <SelectOption value='AnnuityPayableInAdvance'>Dołu</SelectOption>
        </SelectInput>
      </div>
      <div className='form__group'>
        <Input inputState={`${duration <= 0 || Number.isNaN(duration) ? "" : duration}`} handleSetInputState={handleSetDuration} content="Czas trwania" />

        <SelectInput handleSetSelectState={handleSetOptionDuration}>
          <SelectOption value=''>Podany</SelectOption>
          <SelectOption value='DurationInMonths'>W Miesiącach</SelectOption>
          <SelectOption value='DurationInYears'>W Latach</SelectOption>
        </SelectInput>

        <SelectInput handleSetSelectState={handleSetAnnuityCapitalization}>
          <SelectOption value=''>Renta otrzymywana co</SelectOption>
          <SelectOption value='AnnuityAnnually'>Rok</SelectOption>
          <SelectOption value='AnnuitySemiAnnually'>Pół roku</SelectOption>
          <SelectOption value='AnnuityQuarterly'>Kwartał</SelectOption>
          <SelectOption value='AnnuityMonthly'>Miesiąc</SelectOption>
        </SelectInput>
        </div>

        <div className='form__group'>
        
          <Input inputState={`${requiredInterestRate <= 0 || Number.isNaN(requiredInterestRate) ? "" : requiredInterestRate}`} handleSetInputState={handleSetRequiredInterestRate} content="Wymagana Stopa zwrotu w %" />

        </div>

      <div className='form__group--button'>
        <button tabIndex={checkTabIndex} className='form__button' onClick={calculate}>Oblicz</button>
      </div>
    </form>
  );
};

export default PresentValueOfAnAnnuityForm;
