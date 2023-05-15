import { ReactNode, ChangeEvent } from 'react';
import '../../Styles/Form.sass';
import { useSelector } from 'react-redux';

interface SelectInputProps {
  children: ReactNode;
  isRequired?: boolean;
  // swapOptionalState?: string;
  // handleSwapOptionalState?: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetSelectState: (value: ChangeEvent<HTMLInputElement>) => void;
}

interface SelectOptionProps {
  value?: string;
  children: string;
}

const SelectOption = ({ value = '', children }: SelectOptionProps) => {

  const isTitle = value === ''

  return (
    <option value={value} className={`form__option ${isTitle ? 'form__option--disabled': ''}`}>
      {children}
    </option>
  );
};

const SelectInput = ({
  children,
  isRequired = true,
  handleSetSelectState,
  // handleSwapOptionalState,
  // swapOptionalState
}: SelectInputProps) => {
  const navigationForSmallDeviceState = useSelector((state: any) => state.navigationForSmallDevice.flag)
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)
  
  const handleOptionChange = (e: any) => {
    const newEvent = {
      target: {
        value: e.target.value
      }
    } as ChangeEvent<HTMLInputElement>;
    handleSetSelectState(newEvent);
    // handleSwapOptionalState(newEvent)
  };

  // const swapOptionalInput = swapOptionalState !== '' ? 'form__input--warning' : 'form__input--optional'

  // const swapOptionalSpan = swapOptionalState !== '' ? 'form__help-text' : 'form__help-text--optional'
  const checkTabIndex = navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const requiredClass = isRequired ? 'form__select--required' : 'form__select--optional'

  return (
    <label className='form__label'>
      <select tabIndex={checkTabIndex} className={`form__select ${requiredClass}`} required={isRequired} onChange={handleOptionChange}>
        <>
          {children}
        </>
      </select>
    </label>
  );
};

export { SelectInput, SelectOption };
