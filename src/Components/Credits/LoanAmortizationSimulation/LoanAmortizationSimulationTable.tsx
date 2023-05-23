import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalStoreValue } from '../../Global/globalStore.ts'
import Modal from '../../Global/Modal.tsx'
import { modalContentForLoanAmortizationSimulationTable } from '../../../assets'
import '../../../Styles/Table.sass'

const LoanAmortizationSimulationTable = () => {
  const [modalData, setModalData] = useState({
    title: '',
    children: '',
  })

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
      children: modalContentForLoanAmortizationSimulationTable[title],
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
