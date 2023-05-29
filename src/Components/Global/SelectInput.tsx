import { ChangeEvent } from 'react'
import '../../Styles/Form.sass'
import { useSelector } from 'react-redux'

// TODO: Nie zgadzają się typy
// type PropertyType = {
//   [key: string]: string
// }

type SelectInputProps = {
  isRequired?: boolean
  property: any
  handleSetSelectState: (value: ChangeEvent<HTMLInputElement>) => void
}

interface SelectOptionProps {
  value?: string
  children: string
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

const SelectOption = ({ value = '', children }: SelectOptionProps) => {
  const isTitle = value === ''

  return (
    <option
      value={value}
      className={`form__option ${isTitle ? 'form__option--disabled' : ''}`}
    >
      {children}
    </option>
  )
}

const SelectInput = ({
  isRequired = true,
  handleSetSelectState,
  property,
}: SelectInputProps) => {
  const navigationForSmallDeviceState = useSelector(
    (state: NavigationForSmallDeviceType) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector(
    (state: ModalStoreStateType) => state.modalStore.flag
  )

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newEvent = {
      target: {
        value: e.target.value,
      },
    } as ChangeEvent<HTMLInputElement>
    handleSetSelectState(newEvent)
  }

  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const requiredClass = isRequired ? 'form__select--required' : ''

  const resultFromProperty = property.map(
    ({ value, content }: any /* PropertyType */, index: number) => (
      <SelectOption key={index} value={value}>
        {content}
      </SelectOption>
    )
  )

  return (
    <label className="form__label">
      <select
        tabIndex={checkTabIndex}
        className={`form__select ${requiredClass}`}
        required={isRequired}
        onChange={handleOptionChange}
      >
        <>{resultFromProperty}</>
      </select>
    </label>
  )
}

export default SelectInput
