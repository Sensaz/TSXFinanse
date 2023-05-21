import { useSelector } from 'react-redux'
import nominalCommisionFee from './FunctionForTest/nominalCommisionFee.ts'
import '../../../Styles/Result.sass'

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
  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const valueOfFee = nominalCommisionFee(
    loanValue,
    commisionFee,
    doesTheBankChargeACommission
  )

  const { initialDebtBalanceArr } = useSelector(
    (state: any) => state.arraySlice
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

  return (
    <>
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
          RRSO wyniesie: {annualPercentageRate} %
        </h2>
      </div>
    </>
  )
}

export default LoanAmortizationSimulationResult
