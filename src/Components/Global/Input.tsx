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
    inputState ? '' : 'form__input--warning'
  }`

  const spanClassName = inputRequired ? 'form__help-text' : ''

  const spanContent =
    !inputState && inputRequired ? (
      <span className="form__help-text--warn">WYMAGANE</span>
    ) : null

  const minInNumberInput = inputType === 'number' ? '0.01' : null

  return (
    <label className="form__label">
      <input
        tabIndex={checkTabIndex}
        min={minInNumberInput ?? undefined}
        step={'0.01' ?? undefined}
        className={inputClassName}
        type={inputType}
        required={inputRequired}
        onChange={handleInputChange}
        value={inputState}
      />
      <span className={spanClassName}>{content}</span>
      {spanContent}
    </label>
  )
}

export default Input
