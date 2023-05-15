import { useDispatch, useSelector } from 'react-redux'
import {modalStoreValue} from '../../Global/globalStore.ts'
import '../../../Styles/Table.sass'
import '../../../Styles/Result.sass'
import Modal from '../../Global/Modal.tsx'
const LoanAmortizationSimulationResult = () => {
  const navigationForSmallDeviceState = useSelector((state: any) => state.navigationForSmallDevice.flag)
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)
  const dispatch = useDispatch()

  const checkTabIndex = navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const handleToggleModal = (e: any) => {
    dispatch(modalStoreValue.setTrueFlag());
    // console.log(e.target.getAttribute("data-info"));
  }

  return (
    <>
      {modalStoreState && <Modal />}
      <table className='table'>
        <thead className='table__header'>
          <th className='table__header-column'>
            #
          </th>
          <th className='table__header-column'>
            SPD
            <span data-info="SPD" onClick={handleToggleModal} tabIndex={checkTabIndex} className='table__header--info'>i</span>
          </th>
          <th className='table__header-column'>
            ODS
            <span data-info="ODS" onClick={handleToggleModal} tabIndex={checkTabIndex} className='table__header--info'>i</span>
          </th>
          <th className='table__header-column'>
            RK
            <span data-info="RK" onClick={handleToggleModal} tabIndex={checkTabIndex} className='table__header--info'>i</span>
          </th>
          <th className='table__header-column'>
            RPK
            <span data-info="RPK" onClick={handleToggleModal} tabIndex={checkTabIndex} className='table__header--info'>i</span>
          </th>
          <th className='table__header-column'>
            SKD
            <span data-info="SKD" onClick={handleToggleModal} tabIndex={checkTabIndex} className='table__header--info'>i</span>
          </th>
        </thead>
        <tbody className='table__body'>
          <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>1</td>
          </tr>
        </tbody>
      </table>

      <div className='result'>
        <h2 tabIndex={checkTabIndex}  className='result__item'>Wysokość kredytu: </h2>
        <h2 tabIndex={checkTabIndex} className='result__item'>Kwota którą otrzymasz: </h2>
        <h2 tabIndex={checkTabIndex} className='result__item'>Prowizja wyniesie:</h2>
        <h2 tabIndex={checkTabIndex} className='result__item'>Nominalna wartość odsetek: </h2>
        <h2 tabIndex={checkTabIndex} className='result__item'>Nominalnie łącznie oddasz bankowi: </h2>
        <h2 tabIndex={checkTabIndex} className='result__item'>RRSO wyniesie: </h2>
    </div>
    </>
  )
}

export default LoanAmortizationSimulationResult