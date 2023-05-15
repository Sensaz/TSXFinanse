import React from 'react';
import '../../Styles/Form.sass';
import { useSelector } from 'react-redux';

interface InputProps {
  inputType?: string;
  content: string;
  inputRequired?: boolean;
  inputState: string;
  swapOptionalState?: string;
  handleSetInputState: (value: React.ChangeEvent<HTMLInputElement>) => void;
  // handleSwapOptionalState?: (value: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

const Input = ({ inputType = 'number', content, inputRequired = true, inputState, swapOptionalState, handleSetInputState, /*handleSwapOptionalState*/ }: InputProps) => {
  
  const navigationForSmallDeviceState = useSelector((state: any) => state.navigationForSmallDevice.flag)
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEvent = {
      target: {
        value: e.target.value
      }
    } as React.ChangeEvent<HTMLInputElement>;
    handleSetInputState(newEvent);
    // handleSwapOptionalState(newEvent)
  };

  const checkAppIsBlur = navigationForSmallDeviceState ? -1 : 0
  
  const swapOptionalInput = swapOptionalState !== '' ? 'form__input--warning' : 'form__input--optional'

  const swapOptionalSpan = swapOptionalState !== '' ? 'form__help-text' : 'form__help-text--optional'

  const inputClassName = `form__input ${inputRequired ? '' : swapOptionalInput} ${inputState ? '' : 'form__input--warning'}`;
  
  const spanClassName = inputRequired ? "form__help-text" : swapOptionalSpan

  const spanContent = !inputState && inputRequired ? <span className='form__help-text--warn'>WYMAGANE</span> : null

  const minInNumberInput = inputType === 'number' ? "0.01" : null

  return (
    <label className='form__label'>
      <input tabIndex={checkAppIsBlur} min={minInNumberInput ?? undefined} step={"0.01" ?? undefined}  className={inputClassName} type={inputType} required={inputRequired} onChange={handleInputChange} value={inputState} />
      <span className={spanClassName}>{content}</span>
      {spanContent}
    </label>
  );
};

export default Input;
