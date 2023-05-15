import {modalStoreValue} from '../Global/globalStore.ts'
import '../../Styles/Modal.sass'
import { useDispatch } from 'react-redux'

type propsForModal = {
  children: string | JSX.Element | JSX.Element[] 
}



const Modal = () => {
  const dispatch = useDispatch()
  const handleOffModal = () => {
    dispatch(modalStoreValue.setFalseFlag());
  }

 
  return (
    <div className='modal'>
      <div className='modal__navigation'>
        <h1 className='modal__navigation-title'>
          Czym Jest SPD?
        </h1>
        <button onClick={handleOffModal} className='modal__navigation-btn-close'>
          <span className='modal__navigation-btn-close--element'></span>
          <span className='modal__navigation-btn-close--element'></span>
        </button>
      </div>
      <div className='modal__content'>
        <h1>JOŁ JOŁ JOŁ JOŁ</h1>
      </div>
    </div>
  )
}

export default Modal