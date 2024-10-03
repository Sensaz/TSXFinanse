import { ComponentType } from 'react'

import FormButton from './FormButton.tsx'
import store, {
  modalStoreValue,
  navigationForSmallDeviceValue,
} from './globalStore.ts'
import useInfinityScrolling from './Hooks/useInfinityScrolling.ts'
import Input from './Input.tsx'
import Modal from './Modal.tsx'
import parseInputState from './parseInputState.ts'
import Result from './Result.tsx'
import SelectInput from './SelectInput.tsx'

export {
  FormButton,
  store,
  modalStoreValue,
  navigationForSmallDeviceValue,
  useInfinityScrolling,
  Input,
  Modal,
  parseInputState,
  Result,
  SelectInput,
}
