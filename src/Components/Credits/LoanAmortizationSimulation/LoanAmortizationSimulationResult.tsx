import { useDispatch, useSelector } from 'react-redux'
import { modalStoreValue } from '../../Global/globalStore.ts'
import '../../../Styles/Table.sass'
import '../../../Styles/Result.sass'
import Modal from '../../Global/Modal.tsx'
import { useState } from 'react'
import nominalCommisionFee from './FunctionForTest/nominalCommisionFee.ts'

type modalContentType = {
  [key: string]: string
}

type LoanAmortizationSimulationResultType = {
  loanValue: number
  commisionFee: number
  interestForBasePeriod: number
  totalPaymentPeriods: number
  doesTheBankChargeACommission: string
  interestAccrualMethod: string
}

const LoanAmortizationSimulationResult = ({
  loanValue,
  commisionFee,
  interestForBasePeriod,
  totalPaymentPeriods,
  doesTheBankChargeACommission,
  interestAccrualMethod,
}: LoanAmortizationSimulationResultType) => {
  const navigationForSmallDeviceState = useSelector(
    (state: any) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)
  const dispatch = useDispatch()
  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

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

  const valueOfFee = nominalCommisionFee(
    loanValue,
    commisionFee,
    doesTheBankChargeACommission
  )

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
      <td className="table__body-short">{index + 1}</td>
      {loanAmortizationResults.map((el) => {
        return (
          <td key={index * 2} className="table__body-short">
            {el[index].toFixed(2)}
          </td>
        )
      })}
    </tr>
  ))

  const checkLoanAmortizationResultsIsNotEmpty =
    initialDebtBalanceArr.length === 0 ? (
      <tr className="table__body-row">
        <td className="table__body-short">1</td>
        <td className="table__body-short">0.00</td>
        <td className="table__body-short">0.00</td>
        <td className="table__body-short">0.00</td>
        <td className="table__body-short">0.00</td>
        <td className="table__body-short">0.00</td>
      </tr>
    ) : (
      result
    )

  let totalInterestInInterestPaidInAdvance = 0
  let totalInterest = 0

  initialDebtBalanceArr.forEach((el: number) => {
    if (interestAccrualMethod === 'InterestPaidInAdvance')
      totalInterestInInterestPaidInAdvance += el * (interestForBasePeriod / 100)
    totalInterest += el * interestForBasePeriod
  })

  // Wysokość kredytu
  const loanAmount = loanValue

  // Kwota którą otrzymasz
  const amountYouWillReceive = (
    loanValue -
    valueOfFee -
    totalInterestInInterestPaidInAdvance
  ).toFixed(2)

  // Prowizja wyniesie
  const commissionWillBe = (
    valueOfFee + totalInterestInInterestPaidInAdvance
  ).toFixed(2)

  // Nominalna wartość odsetek
  const nominalInterestValue = totalInterest.toFixed(2)

  // Nominalnie łącznie oddasz bankowi
  const repaymentNominal = (loanValue + totalInterest + valueOfFee).toFixed(2)

  // RRSO wyniesie
  const annualPercentageRate = (
    (Math.pow(1 + interestForBasePeriod, totalPaymentPeriods) - 1) *
    100
  ).toFixed(2)

  // console.log(interestForBasePeriod)
  // const presentValueAnnuityFactor =
  //   (1 - 1 / Math.pow(1 + interestForBasePeriod, totalPaymentPeriods)) /
  //   interestForBasePeriod

  return (
    <>
      {modalStoreState && (
        <Modal modalTitle={modalData.title}>{modalData.children}</Modal>
      )}
      <table className="table">
        <thead className="table__header">
          <tr>
            <th className="table__header-column">#</th>
            <th className="table__header-column">
              SPD
              <span
                data-info="SPD"
                onClick={handleOnModal}
                tabIndex={checkTabIndex}
                className="table__header--info"
              >
                i
              </span>
            </th>
            <th className="table__header-column">
              ODS
              <span
                data-info="ODS"
                onClick={handleOnModal}
                tabIndex={checkTabIndex}
                className="table__header--info"
              >
                i
              </span>
            </th>
            <th className="table__header-column">
              RK
              <span
                data-info="RK"
                onClick={handleOnModal}
                tabIndex={checkTabIndex}
                className="table__header--info"
              >
                i
              </span>
            </th>
            <th className="table__header-column">
              RPK
              <span
                data-info="RPK"
                onClick={handleOnModal}
                tabIndex={checkTabIndex}
                className="table__header--info"
              >
                i
              </span>
            </th>
            <th className="table__header-column">
              SKD
              <span
                data-info="SKD"
                onClick={handleOnModal}
                tabIndex={checkTabIndex}
                className="table__header--info"
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

      <div className="result">
        <h2 tabIndex={checkTabIndex} className="result__item">
          Wysokość kredytu: {loanAmount}
        </h2>
        <h2 tabIndex={checkTabIndex} className="result__item">
          Kwota którą otrzymasz: {amountYouWillReceive}
        </h2>
        <h2 tabIndex={checkTabIndex} className="result__item">
          Prowizja wyniesie: {commissionWillBe}
        </h2>
        <h2 tabIndex={checkTabIndex} className="result__item">
          Nominalna wartość odsetek: {nominalInterestValue}
        </h2>
        <h2 tabIndex={checkTabIndex} className="result__item">
          Nominalnie oddasz bankowi: {repaymentNominal}
        </h2>
        <h2 tabIndex={checkTabIndex} className="result__item">
          RRSO wyniesie: {annualPercentageRate}
        </h2>
      </div>
    </>
  )
}

export default LoanAmortizationSimulationResult
