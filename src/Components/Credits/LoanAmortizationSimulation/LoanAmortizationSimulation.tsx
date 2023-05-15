import { ChangeEvent, MouseEvent, useState } from 'react'
import LoanAmortizationSimulationForm from './LoanAmortizationSimulationForm'
import LoanAmortizationSimulationResult from './LoanAmortizationSimulationResult'

const LoanAmortizationSimulation = () => {
  const [loanValue, setLoanValue] = useState(0)
  const [duration, setDuration] = useState(0)
  const [marginOfTheBank, setMarginOfTheBank] = useState(0)
  const [commisionAmmoutn, setCommisionAmmoutn] = useState(0)

  const [optionDuration, setOptionDuration] = useState("")
  const [interestAccrualMethod, setInterestAccrualMethod] = useState("")
  const [doesTheBankChargeACommission, setDoesTheBankChargeACommission] = useState("")
  const [loanRepaymentMethod, setLoanRepaymentMethod] = useState("")


  const handleSetLoanValue = (e: ChangeEvent<HTMLInputElement>) => {
    setLoanValue(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }

  const handleSetDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setDuration(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }
  const hnadleSetMarginOfTheBank = (e: ChangeEvent<HTMLInputElement>) => {
    setMarginOfTheBank(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }
  const hnadleSetCommisionAmmoutn = (e: ChangeEvent<HTMLInputElement>) => {
    setCommisionAmmoutn(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }
  
  const handleSetOptionDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionDuration(e.target.value)
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
    // console.log("Wysokość Kredytu: ", loanValue)
    // console.log("Czas Trwania: ", duration)
    // console.log("Marża Banku: ", marginOfTheBank)
    // console.log("Czas Trwania podany w: ", optionDuration)
    // console.log("Metoda Pobierania Odsetek Prez Bank: ", interestAccrualMethod)
    // console.log("Czy bank pobiera prowizje: ", doesTheBankChargeACommission)
    console.log("Wysokość Prowizji: ", commisionAmmoutn)
    // console.log("Metoda Spłacania kredytu: ", loanRepaymentMethod)
  }


  return (
    <>
      <LoanAmortizationSimulationForm
        loanValue={loanValue}
        duration={duration}
        marginOfTheBank={marginOfTheBank}
        commisionAmmoutn={commisionAmmoutn}
        setCommisionAmmoutn={setCommisionAmmoutn}
        doesTheBankChargeACommission={doesTheBankChargeACommission}
        handleSetLoanValue={handleSetLoanValue}
        handleSetDuration={handleSetDuration}
        hnadleSetMarginOfTheBank={hnadleSetMarginOfTheBank}
        hnadleSetCommisionAmmoutn={hnadleSetCommisionAmmoutn}
        handleSetOptionDuration={handleSetOptionDuration}
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