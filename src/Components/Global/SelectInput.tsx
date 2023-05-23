import { ChangeEvent } from 'react'
import '../../Styles/Form.sass'
import { useSelector } from 'react-redux'

interface SelectInputProps {
  isRequired?: boolean
  property: any
  // swapOptionalState?: string;
  // handleSwapOptionalState?: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSetSelectState: (value: ChangeEvent<HTMLInputElement>) => void
}

interface SelectOptionProps {
  value?: string
  children: string
}

interface ResultFromPropertyType {
  value: string
  content: string
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
}: // handleSwapOptionalState,
// swapOptionalState
SelectInputProps) => {
  const navigationForSmallDeviceState = useSelector(
    (state: any) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)

  const handleOptionChange = (e: any) => {
    const newEvent = {
      target: {
        value: e.target.value,
      },
    } as ChangeEvent<HTMLInputElement>
    handleSetSelectState(newEvent)
    // handleSwapOptionalState(newEvent)
  }

  // const swapOptionalInput = swapOptionalState !== '' ? 'form__input--warning' : 'form__input--optional'

  // const swapOptionalSpan = swapOptionalState !== '' ? 'form__help-text' : 'form__help-text--optional'
  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const requiredClass = isRequired
    ? 'form__select--required'
    : 'form__select--optional'

  const resultFromProperty = property.map(
    ({ value, content }: ResultFromPropertyType, index: number) => (
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
