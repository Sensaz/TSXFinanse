import { useSelector } from 'react-redux'
import { ChangeEvent, MouseEvent, useEffect } from 'react'
import '../../../Styles/Form.sass'
import { Input, SelectInput, SelectOption  } from '../../Global'

interface LoanAmortizationSimulationFormProps {
  loanValue: number;
  duration: number;
  marginOfTheBank: number;
  commisionAmmoutn: number;
  doesTheBankChargeACommission: string;
  setCommisionAmmoutn: (value: number) => void;
  handleSetLoanValue: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetDuration: (value: ChangeEvent<HTMLInputElement>) => void;
  hnadleSetMarginOfTheBank: (value: ChangeEvent<HTMLInputElement>) => void;
  hnadleSetCommisionAmmoutn: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetOptionDuration: (value: ChangeEvent<HTMLInputElement>) => void; 
  handleSetInterestAccrualMethod: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetDoesTheBankChargeACommission: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetLoanRepaymentMethod: (value: ChangeEvent<HTMLInputElement>) => void;
  calculate: (value: MouseEvent<HTMLButtonElement>) => void;
}

const LoanAmortizationSimulationForm = ({
  loanValue,
  duration,
  marginOfTheBank,
  commisionAmmoutn,
  doesTheBankChargeACommission,
  setCommisionAmmoutn,
  handleSetLoanValue,
  handleSetDuration,
  hnadleSetMarginOfTheBank,
  hnadleSetCommisionAmmoutn,
  handleSetOptionDuration,
  handleSetInterestAccrualMethod,
  handleSetDoesTheBankChargeACommission,
  handleSetLoanRepaymentMethod,
  calculate
}: LoanAmortizationSimulationFormProps) => {
  useEffect(() => {
    setCommisionAmmoutn(0)
  }, [doesTheBankChargeACommission])
  const navigationForSmallDeviceState = useSelector((state: any) => state.navigationForSmallDevice.flag)
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)

  const checkTabIndex = navigationForSmallDeviceState || modalStoreState ? -1 : 1
  return (
    <form className="form">

      <div className='form__group'>
        <Input inputState={`${loanValue <= 0 || Number.isNaN(loanValue) ? "" : loanValue}`} handleSetInputState={handleSetLoanValue} content="Wysokość Kredytu" />
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
        
        <Input inputState={`${marginOfTheBank <= 0 || Number.isNaN(marginOfTheBank) ? "" : marginOfTheBank}`} handleSetInputState={hnadleSetMarginOfTheBank} content="Marża banku w %" />
        
          <SelectInput handleSetSelectState={handleSetInterestAccrualMethod}>
            <SelectOption value=''>Metoda Pobierania Odsetek Przez Bank</SelectOption>
            <SelectOption value='ZGóry'>Z Góry</SelectOption>
            <SelectOption value='ZDołu'>Z Dołu</SelectOption>
          </SelectInput>
        
      </div>
      <div className='form__group'>
        {doesTheBankChargeACommission === 'Tak' &&
          <Input inputState={`${commisionAmmoutn <= 0 || Number.isNaN(commisionAmmoutn) ? "" : commisionAmmoutn}`} handleSetInputState={hnadleSetCommisionAmmoutn} content="Wysokość Prowizji w %" />
        }
          <SelectInput handleSetSelectState={handleSetDoesTheBankChargeACommission}>
            <SelectOption value=''>Czy Bank Pobiera Prowizje</SelectOption>
            <SelectOption value='Tak'>Tak</SelectOption>
            <SelectOption value='Nie'>Nie</SelectOption>
          </SelectInput>


      </div>
      <div className='form__group'>
          <SelectInput handleSetSelectState={handleSetLoanRepaymentMethod}>
            <SelectOption value=''>Metoda Spłacania kredytu</SelectOption>
            <SelectOption value='RatyMalejące'>Równe Raty Kapitałowe (Malejące)</SelectOption>
            <SelectOption value='RatyStałe'>Równe Raty Płatności Kredytu (Stałe)</SelectOption>
          </SelectInput>
      </div>

      <div className='form__group--button'>
        <button tabIndex={checkTabIndex} className='form__button' onClick={calculate}>Oblicz</button>
      </div>
    </form>
  );
};

export default LoanAmortizationSimulationForm;
