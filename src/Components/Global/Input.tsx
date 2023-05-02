import React from 'react';
import '../../Styles/Form.sass';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEvent = {
      target: {
        value: e.target.value
      }
    } as React.ChangeEvent<HTMLInputElement>;
    handleSetInputState(newEvent);
    // handleSwapOptionalState(newEvent)
  };

  const swapOptionalInput = swapOptionalState !== '' ? 'form__input--warning' : 'form__input--optional'

  const swapOptionalSpan = swapOptionalState !== '' ? 'form__help-text' : 'form__help-text--optional'


  const inputClassName = `form__input ${inputRequired ? '' : swapOptionalInput} ${inputState ? '' : 'form__input--warning'}`;
  
  const spanClassName = inputRequired ? "form__help-text" : swapOptionalSpan

  const spanContent = !inputState && inputRequired ? <span className='form__help-text--warn'>WYMAGANE</span> : null

  const minInNumberInput = inputType === 'number' ? "1" : null


  return (
    <label className='form__label'>
      <input min={minInNumberInput ?? undefined} step={"0.01" ?? undefined}  className={inputClassName} type={inputType} required={inputRequired} onChange={handleInputChange} value={inputState} />
      <span className={spanClassName}>{content}</span>
      {spanContent}
    </label>
  );
};

export default Input;
