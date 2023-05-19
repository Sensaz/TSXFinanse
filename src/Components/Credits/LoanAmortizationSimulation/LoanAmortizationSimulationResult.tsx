import { useDispatch, useSelector } from 'react-redux'
import {modalStoreValue} from '../../Global/globalStore.ts'
import '../../../Styles/Table.sass'
import '../../../Styles/Result.sass'
import Modal from '../../Global/Modal.tsx'
import { useEffect, useState } from 'react'

type modalContentType = {
  [key: string]: string
}

const LoanAmortizationSimulationResult = () => {
  const navigationForSmallDeviceState = useSelector((state: any) => state.navigationForSmallDevice.flag)
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)
  const dispatch = useDispatch()
  const checkTabIndex = navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const [modalData, setModalData] = useState({
    title: '',
    children: ''
  })

  const modalContent: modalContentType = {
    SPD: 'Rozwinięciem Skrótu jest Saldo Początkowe Długu, określa ile wynosi saldo tego właśnie długu na początek danego okresu, właściwością SPD jest to że jest równe SKD (saldu końcowemu długu) z poprzedniego okresu',
    ODS: 'Rozwinięciem skrótu są odsetki, jak sama nazwa mówi jest to kwota która nie idzie na spłate stanu zadłużenia tylko do jako czysty zysk do banku',
    RK: 'Rozwinięciem skrótu jest Rata Kapitałowa, jest to kwota jaka bezpośrednio idzie na spłate stanu zadłużenia',
    RPK: 'Rozwinięciem skrótu jest Rata Płatności Kredytu, stanowi ona sume odsetek (ODS) z ratą kapitałową (RK), jej interpretacja jest następująca: tyle właśnie oddamy bankowi za ten okres spłaty zadłużenia',
    SKD: 'Rozwinięciem skrótu jest Saldo Końcowe Długu oznacza ono jaki jest nasz stan zadłużenia po zapłacie raty kapitałowej (RK) czyli ile jeszcze musimy oddać bankowi bez odsetek, wynik ten stanowi saldo początkowe długu (SPD) na początek następnego okresu',
  }

  const handleOnModal = (e: any) => {
    const title = e.target.getAttribute("data-info")
    setModalData({
      title: title,
      children: modalContent[title]
    })
    dispatch(modalStoreValue.setTrueFlag())
  }

  const {initialDebtBalanceArr, interestArr,
    loanPaymentArr,
    principalPaymentArr,
    finalDebtBalanceArr} = useSelector((state: any) => state.arraySlice)

  console.log(initialDebtBalanceArr)
  console.log(interestArr)
  console.log(loanPaymentArr)
  console.log(principalPaymentArr)
  console.log(finalDebtBalanceArr)
    let result;
    useEffect(()=>{

    }, [initialDebtBalanceArr,
      interestArr,
      loanPaymentArr,
      principalPaymentArr,
      finalDebtBalanceArr])

  return (
    <>
      {modalStoreState && <Modal modalTitle={modalData.title}>{modalData.children}</Modal>}
      <table className='table'>
        <thead className='table__header'>
          <tr>
            <th className='table__header-column'>
              #
            </th>
            <th className='table__header-column'>
              SPD
              <span data-info="SPD" onClick={handleOnModal} tabIndex={checkTabIndex} className='table__header--info'>i</span>
            </th>
            <th className='table__header-column'>
              ODS
              <span data-info="ODS" onClick={handleOnModal} tabIndex={checkTabIndex} className='table__header--info'>i</span>
            </th>
            <th className='table__header-column'>
              RK
              <span data-info="RK" onClick={handleOnModal} tabIndex={checkTabIndex} className='table__header--info'>i</span>
            </th>
            <th className='table__header-column'>
              RPK
              <span data-info="RPK" onClick={handleOnModal} tabIndex={checkTabIndex} className='table__header--info'>i</span>
            </th>
            <th className='table__header-column'>
              SKD
              <span data-info="SKD" onClick={handleOnModal} tabIndex={checkTabIndex} className='table__header--info'>i</span>
            </th>
          </tr>
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