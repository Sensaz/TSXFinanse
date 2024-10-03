import { MouseEvent } from 'react'
import { useSelector } from 'react-redux'

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

interface FormButtonType {
  calculate: (value: MouseEvent<HTMLButtonElement>) => void
}

const FormButton = ({ calculate }: FormButtonType) => {
  const navigationForSmallDeviceState = useSelector(
    (state: NavigationForSmallDeviceType) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector(
    (state: ModalStoreStateType) => state.modalStore.flag
  )
  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  return (
    <div className="form__group--button">
      <button
        tabIndex={checkTabIndex}
        className="form__button"
        onClick={calculate}
      >
        Oblicz
      </button>
    </div>
  )
}

export default FormButton
