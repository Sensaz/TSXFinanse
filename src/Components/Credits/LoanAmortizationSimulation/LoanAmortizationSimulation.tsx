import { ChangeEvent, MouseEvent, useState } from 'react'
import LoanAmortizationSimulationForm from './LoanAmortizationSimulationForm'
import LoanAmortizationSimulationResult from './LoanAmortizationSimulationResult'
import loanAmortizationCalc from './FunctionForTest/loanAmortizationCalc'
import { useDispatch } from 'react-redux'
import numberOfBasePeriodsResult from './FunctionForTest/numberOfBasePeriodsResult'
import creditDurationInMonths from './FunctionForTest/creditDurationInMonths'
import LoanAmortizationSimulationTable from './LoanAmortizationSimulationTable'

const LoanAmortizationSimulation = () => {
  const [loanValue, setLoanValue] = useState(10000)
  const [duration, setDuration] = useState(20)
  const [marginOfTheBank, setMarginOfTheBank] = useState(5)
  const [commisionFee, setCommisionFee] = useState(0)

  const [optionDuration, setOptionDuration] = useState('')
  const [paymentPeriodOfInstallment, setPaymentPeriodOfInstallment] =
    useState('')
  const [interestAccrualMethod, setInterestAccrualMethod] = useState('')
  const [doesTheBankChargeACommission, setDoesTheBankChargeACommission] =
    useState('')
  const [loanRepaymentMethod, setLoanRepaymentMethod] = useState('')

  const dispatch = useDispatch()

  const handleSetLoanValue = (e: ChangeEvent<HTMLInputElement>) => {
    setLoanValue(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }

  const handleSetDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setDuration(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }
  const handleSetMarginOfTheBank = (e: ChangeEvent<HTMLInputElement>) => {
    setMarginOfTheBank(
      !Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0
    )
  }
  const handleSetCommisionFee = (e: ChangeEvent<HTMLInputElement>) => {
    setCommisionFee(
      !Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0
    )
  }

  const handleSetOptionDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionDuration(e.target.value)
  }
  const handleSetPaymentPeriodOfInstallment = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentPeriodOfInstallment(e.target.value)
  }
  const handleSetInterestAccrualMethod = (e: ChangeEvent<HTMLInputElement>) => {
    setInterestAccrualMethod(e.target.value)
  }
  const handleSetDoesTheBankChargeACommission = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setDoesTheBankChargeACommission(e.target.value)
  }
  const handleSetLoanRepaymentMethod = (e: ChangeEvent<HTMLInputElement>) => {
    setLoanRepaymentMethod(e.target.value)
  }

  // Czas Trwania w miesiącach
  const durationInMonths = creditDurationInMonths(duration, optionDuration)

  // Liczba okresów bazowych
  const { totalPaymentPeriods, basePeriodsPerYear } = numberOfBasePeriodsResult(
    paymentPeriodOfInstallment,
    durationInMonths
  )
  // Oprocentowanie w okresie bazowym
  const interestForBasePeriod = marginOfTheBank / basePeriodsPerYear / 100

  const calculate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    loanAmortizationCalc(
      loanValue,
      durationInMonths,
      totalPaymentPeriods,
      basePeriodsPerYear,
      interestForBasePeriod,
      interestAccrualMethod,
      loanRepaymentMethod,
      doesTheBankChargeACommission,
      dispatch
    )
  }

  console.log(loanRepaymentMethod)

  return (
    <>
      <LoanAmortizationSimulationForm
        loanValue={loanValue}
        duration={duration}
        marginOfTheBank={marginOfTheBank}
        commisionFee={commisionFee}
        setCommisionFee={setCommisionFee}
        setLoanRepaymentMethod={setLoanRepaymentMethod}
        interestAccrualMethod={interestAccrualMethod}
        doesTheBankChargeACommission={doesTheBankChargeACommission}
        handleSetLoanValue={handleSetLoanValue}
        handleSetDuration={handleSetDuration}
        handleSetMarginOfTheBank={handleSetMarginOfTheBank}
        handleSetCommisionFee={handleSetCommisionFee}
        handleSetOptionDuration={handleSetOptionDuration}
        handleSetPaymentPeriodOfInstallment={
          handleSetPaymentPeriodOfInstallment
        }
        handleSetInterestAccrualMethod={handleSetInterestAccrualMethod}
        handleSetDoesTheBankChargeACommission={
          handleSetDoesTheBankChargeACommission
        }
        handleSetLoanRepaymentMethod={handleSetLoanRepaymentMethod}
        calculate={calculate}
      />
      <LoanAmortizationSimulationTable />
      <LoanAmortizationSimulationResult
        loanValue={loanValue}
        commisionFee={commisionFee}
        interestForBasePeriod={interestForBasePeriod}
        totalPaymentPeriods={totalPaymentPeriods}
        doesTheBankChargeACommission={doesTheBankChargeACommission}
        interestAccrualMethod={interestAccrualMethod}
        dispatch={dispatch}
      />
    </>
  )
}

export default LoanAmortizationSimulation
