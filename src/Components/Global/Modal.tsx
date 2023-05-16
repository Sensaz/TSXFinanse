import {modalStoreValue} from '../Global/globalStore.ts'
import '../../Styles/Modal.sass'
import { useDispatch } from 'react-redux'

type propsForModal = {
  children?: string | JSX.Element | JSX.Element[]  | any
  modalTitle?: string | JSX.Element | JSX.Element[]  | any
}



const Modal = ({modalTitle, children}:propsForModal) => {
  const dispatch = useDispatch()
  const handleOffModal = () => {
    dispatch(modalStoreValue.setFalseFlag());
  }

 
  return (
    <div className='modal'>
      <div className='modal__navigation'>
        <h1 className='modal__navigation-title'>
          Co oznacza {modalTitle}?
        </h1>
        <button onClick={handleOffModal} className='modal__navigation-btn-close'>
          <span className='modal__navigation-btn-close--element'></span>
          <span className='modal__navigation-btn-close--element'></span>
        </button>
      </div>
      <div className='modal__content'>
        {children}
      </div>
    </div>
  )
}

export default Modal