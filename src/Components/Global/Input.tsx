import React from 'react'
import '../../Styles/Form.sass'
import { useSelector } from 'react-redux'

interface InputProps {
  inputType?: string
  max?: number
  content: string
  inputRequired?: boolean
  inputState: string
  handleSetInputState: (value: React.ChangeEvent<HTMLInputElement>) => void
}

interface NavigationForSmallDeviceType {
  navigationForSmallDevice: {
    flag: boolean
  }
}

interface ModalStoreStateType {
  modalStore: {
    flag: boolean
  }
}

const Input = ({
  inputType = 'number',
  content,
  inputRequired = true,
  inputState,
  handleSetInputState,
}: InputProps) => {
  const navigationForSmallDeviceState = useSelector(
    (state: NavigationForSmallDeviceType) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector(
    (state: ModalStoreStateType) => state.modalStore.flag
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEvent = {
      target: {
        value: e.target.value,
      },
    } as React.ChangeEvent<HTMLInputElement>
    handleSetInputState(newEvent)
  }
  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const inputClassName = `form__input ${
    inputState
      ? ''
      : `${inputRequired ? 'form__input--warning' : 'form__input--optional'}`
  }`

  const spanContent = inputState ? null : (
    <span
      className={
        inputRequired ? 'form__help-text--warn' : 'form__help-text--optional'
      }
    >
      {inputRequired ? 'WYMAGANE' : 'OPCJONALNE'}
    </span>
  )

  const minInNumberInput = inputType === 'number' ? '0.01' : undefined

  return (
    <label className="form__label">
      <input
        tabIndex={checkTabIndex}
        min={minInNumberInput}
        step="0.01"
        className={inputClassName}
        type={inputType}
        required={true}
        onChange={handleInputChange}
        value={inputState}
      />
      <span className="form__help-text">{content}</span>
      {spanContent}
    </label>
  )
}

export default Input
