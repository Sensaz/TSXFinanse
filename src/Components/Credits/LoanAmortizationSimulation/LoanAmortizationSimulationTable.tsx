import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalStoreValue } from '../../Global/globalStore.ts'
import Modal from '../../Global/Modal.tsx'
import '../../../Styles/Table.sass'

type modalContentType = {
  [key: string]: string
}

const LoanAmortizationSimulationTable = () => {
  const [modalData, setModalData] = useState({
    title: '',
    children: '',
  })

  const modalContent: modalContentType = {
    SPD: 'Rozwinięciem Skrótu jest Saldo Początkowe Długu, określa ile wynosi saldo tego właśnie długu na początek danego okresu, właściwością SPD jest to że jest równe SKD (saldu końcowemu długu) z poprzedniego okresu',
    ODS: 'Rozwinięciem skrótu są odsetki, jak sama nazwa mówi jest to kwota która nie idzie na spłate stanu zadłużenia tylko do jako czysty zysk do banku',
    RK: 'Rozwinięciem skrótu jest Rata Kapitałowa, jest to kwota jaka bezpośrednio idzie na spłate stanu zadłużenia',
    RPK: 'Rozwinięciem skrótu jest Rata Płatności Kredytu, stanowi ona sume odsetek (ODS) z ratą kapitałową (RK), jej interpretacja jest następująca: tyle właśnie oddamy bankowi za ten okres spłaty zadłużenia',
    SKD: 'Rozwinięciem skrótu jest Saldo Końcowe Długu oznacza ono jaki jest nasz stan zadłużenia po zapłacie raty kapitałowej (RK) czyli ile jeszcze musimy oddać bankowi bez odsetek, wynik ten stanowi saldo początkowe długu (SPD) na początek następnego okresu',
  }

  const navigationForSmallDeviceState = useSelector(
    (state: any) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)
  const dispatch = useDispatch()
  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const handleOnModal = (e: any) => {
    const title = e.target.getAttribute('data-info')
    setModalData({
      title: title,
      children: modalContent[title],
    })
    dispatch(modalStoreValue.setTrueFlag())
  }

  const {
    initialDebtBalanceArr,
    interestArr,
    principalPaymentArr,
    loanPaymentArr,
    finalDebtBalanceArr,
  } = useSelector((state: any) => state.arraySlice)

  const loanAmortizationResults = [
    initialDebtBalanceArr,
    interestArr,
    principalPaymentArr,
    loanPaymentArr,
    finalDebtBalanceArr,
  ]

  const result = initialDebtBalanceArr.map((_: any, index: number) => (
    <tr key={index} className="table__body-row">
      <td className="table__body-short table--id">{index + 1}</td>
      {loanAmortizationResults.map((el) => {
        return <td className="table__body-short">{el[index].toFixed(2)}</td>
      })}
    </tr>
  ))

  const checkLoanAmortizationResultsIsNotEmpty =
    initialDebtBalanceArr.length === 0 ? (
      <tr className="table__body-row">
        <td className="table__body-short table--id">1</td>
        <td className="table__body-short">0.00</td>
        <td className="table__body-short">0.00</td>
        <td className="table__body-short">0.00</td>
        <td className="table__body-short">0.00</td>
        <td className="table__body-short">0.00</td>
      </tr>
    ) : (
      result
    )

  return (
    <>
      {modalStoreState && (
        <Modal modalTitle={modalData.title}>{modalData.children}</Modal>
      )}
      <table className="table">
        <thead className="table__header">
          <tr className="table__header--row">
            <th className="table__header-short table--id">#</th>
            <th className="table__header-short">
              SPD
              <span
                data-info="SPD"
                onClick={handleOnModal}
                tabIndex={checkTabIndex}
                className="table__header-short--info"
              >
                i
              </span>
            </th>
            <th className="table__header-short">
              ODS
              <span
                data-info="ODS"
                onClick={handleOnModal}
                tabIndex={checkTabIndex}
                className="table__header-short--info"
              >
                i
              </span>
            </th>
            <th className="table__header-short">
              RK
              <span
                data-info="RK"
                onClick={handleOnModal}
                tabIndex={checkTabIndex}
                className="table__header-short--info"
              >
                i
              </span>
            </th>
            <th className="table__header-short">
              RPK
              <span
                data-info="RPK"
                onClick={handleOnModal}
                tabIndex={checkTabIndex}
                className="table__header-short--info"
              >
                i
              </span>
            </th>
            <th className="table__header-short">
              SKD
              <span
                data-info="SKD"
                onClick={handleOnModal}
                tabIndex={checkTabIndex}
                className="table__header-short--info"
              >
                i
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="table__body">
          {checkLoanAmortizationResultsIsNotEmpty}
        </tbody>
      </table>
    </>
  )
}

export default LoanAmortizationSimulationTable
