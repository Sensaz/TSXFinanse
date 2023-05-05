import { ChangeEvent, useState, MouseEvent } from "react"
import PresentValueOfAnAnnuityForm from "./PresentValueOfAnAnnuityForm.tsx"
import ResultPresentTimeValueOfMoney from "../ResultPresentTimeValueOfMoney.tsx"
import PresentValueOfAnAnnuityFunction from "./FunctionForTest"

const PresentValueOfAnAnnuityCalculator = () => {
 // Oczekiwana Renta
 const [expectedAnnuity, setExpectedAnnuity] = useState("")
 // Czas Trwania
 const [duration, setDuration] = useState("")
 // Wymagana Stopa Zwrotu
 const [requiredInterestRate, setRequiredInterestRate] = useState("")

 const handleSetExpectedAnnuity = (e: ChangeEvent<HTMLInputElement>) => {
  setExpectedAnnuity(e.target.value)
 }
 const handleSetDuration = (e: ChangeEvent<HTMLInputElement>) => {
   setDuration(e.target.value)
 }

 const handleSetRequiredInterestRate = (e: ChangeEvent<HTMLInputElement>) => {
  setRequiredInterestRate(e.target.value)
 }


  
 // Renta Otrzymywana z Góry / Dołu
 const [annuityRecived, setAnnuityRecived] = useState("")
  
 // Czas Trawania podany w miesiącach / latach
 const [optionDuration, setOptionDuration] = useState("")

 // Renta Otrzymywana Co Rok / Pół Roku / Kwartał / Miesiąc
 const [annuityCapitalization, setAnnuityCapitalization] = useState("")
 
 const handleSetAnnuityRecived = (e: ChangeEvent<HTMLInputElement>) => {
  setAnnuityRecived(e.target.value)
 }

 const handleSetOptionDuration = (e: ChangeEvent<HTMLInputElement>) => {
  setOptionDuration(e.target.value)
 }
  
  const handleSetAnnuityCapitalization = (e: ChangeEvent<HTMLInputElement>) => {
  setAnnuityCapitalization(e.target.value)
 }
 
 const [resultCompoundInterestCalculate, setResultCompoundInterestCalculate] = useState({
   presentValue: 0,
   parsedExpectedFinalValue: 0,
   accruedInterest: 0
 })
 
 const compoundInterestCalculateResults = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  PresentValueOfAnAnnuityFunction(
    expectedAnnuity,
    duration,
    requiredInterestRate,
    annuityRecived,
    optionDuration,
    annuityCapitalization,
    setResultCompoundInterestCalculate
  )
 }

  return (
    <div>
      <PresentValueOfAnAnnuityForm
        expectedAnnuity={expectedAnnuity}
        duration={duration}
        requiredInterestRate={requiredInterestRate}
        handleSetExpectedAnnuity={handleSetExpectedAnnuity}
        handleSetDuration={handleSetDuration}
        handleSetRequiredInterestRate={handleSetRequiredInterestRate}
        handleSetAnnuityRecived={handleSetAnnuityRecived}
        handleSetOptionDuration={handleSetOptionDuration}
        handleSetAnnuityCapitalization={handleSetAnnuityCapitalization}
        calculate={compoundInterestCalculateResults}
      />
      <ResultPresentTimeValueOfMoney
        parsedExpectedFinalValue={resultCompoundInterestCalculate.presentValue}
        investmentResult={resultCompoundInterestCalculate.parsedExpectedFinalValue}
        accruedInterest={resultCompoundInterestCalculate.accruedInterest}
      />
    </div>
  )
}

export default PresentValueOfAnAnnuityCalculator