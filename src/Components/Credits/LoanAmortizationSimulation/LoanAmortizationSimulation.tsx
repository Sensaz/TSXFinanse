import { ChangeEvent, MouseEvent, useState } from 'react'
import LoanAmortizationSimulationForm from './LoanAmortizationSimulationForm'
import LoanAmortizationSimulationResult from './LoanAmortizationSimulationResult'
import loanAmortizationCalc from './FunctionForTest/loanAmortizationCalc'

const LoanAmortizationSimulation = () => {
  const [loanValue, setLoanValue] = useState(0)
  const [duration, setDuration] = useState(0)
  const [marginOfTheBank, setMarginOfTheBank] = useState(0)
  const [commisionFee, setCommisionFee] = useState(0)

  const [optionDuration, setOptionDuration] = useState("")
  const [paymentPeriodOfInstallment, setPaymentPeriodOfInstallment] = useState("")
  const [interestAccrualMethod, setInterestAccrualMethod] = useState("")
  const [doesTheBankChargeACommission, setDoesTheBankChargeACommission] = useState("")
  const [loanRepaymentMethod, setLoanRepaymentMethod] = useState("")


  const handleSetLoanValue = (e: ChangeEvent<HTMLInputElement>) => {
    setLoanValue(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }

  const handleSetDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setDuration(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }
  const handleSetMarginOfTheBank = (e: ChangeEvent<HTMLInputElement>) => {
    setMarginOfTheBank(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }
  const handleSetCommisionFee = (e: ChangeEvent<HTMLInputElement>) => {
    setCommisionFee(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }
  
  const handleSetOptionDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionDuration(e.target.value)
  }
  const handleSetPaymentPeriodOfInstallment = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentPeriodOfInstallment(e.target.value)
  }
  const handleSetInterestAccrualMethod = (e: ChangeEvent<HTMLInputElement>) => {
    setInterestAccrualMethod(e.target.value)
  }
  const handleSetDoesTheBankChargeACommission = (e: ChangeEvent<HTMLInputElement>) => {
    setDoesTheBankChargeACommission(e.target.value)
  }
  const handleSetLoanRepaymentMethod = (e: ChangeEvent<HTMLInputElement>) => {
    setLoanRepaymentMethod(e.target.value)
  }

  const calculate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    loanAmortizationCalc(
      loanValue,
      duration,
      marginOfTheBank,
      commisionFee,
      optionDuration,
      paymentPeriodOfInstallment,
      interestAccrualMethod,
      doesTheBankChargeACommission,
      loanRepaymentMethod
    )
    console.log( loanAmortizationCalc(
      loanValue,
      duration,
      marginOfTheBank,
      commisionFee,
      optionDuration,
      paymentPeriodOfInstallment,
      interestAccrualMethod,
      doesTheBankChargeACommission,
      loanRepaymentMethod
    ))
  }


  return (
    <>
      <LoanAmortizationSimulationForm
        loanValue={loanValue}
        duration={duration}
        marginOfTheBank={marginOfTheBank}
        commisionFee={commisionFee}
        setCommisionFee={setCommisionFee}
        doesTheBankChargeACommission={doesTheBankChargeACommission}
        handleSetLoanValue={handleSetLoanValue}
        handleSetDuration={handleSetDuration}
        handleSetMarginOfTheBank={handleSetMarginOfTheBank}
        handleSetCommisionFee={handleSetCommisionFee}
        handleSetOptionDuration={handleSetOptionDuration}
        handleSetPaymentPeriodOfInstallment={handleSetPaymentPeriodOfInstallment}
        handleSetInterestAccrualMethod={handleSetInterestAccrualMethod}
        handleSetDoesTheBankChargeACommission={handleSetDoesTheBankChargeACommission}
        handleSetLoanRepaymentMethod={handleSetLoanRepaymentMethod}
        calculate={calculate}
      />
      <LoanAmortizationSimulationResult />
    </>
  )
}

export default LoanAmortizationSimulation