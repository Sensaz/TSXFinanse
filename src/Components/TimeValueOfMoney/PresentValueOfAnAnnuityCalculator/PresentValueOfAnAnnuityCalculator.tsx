import { ChangeEvent, useState, MouseEvent } from "react"
import PresentValueOfAnAnnuityForm from "./PresentValueOfAnAnnuityForm.tsx"
import ResultPresentTimeValueOfMoney from "../ResultPresentTimeValueOfMoney.tsx"
import presentValueOfAnAnnuityResults from "./presentValueOfAnAnnuityResults.ts"

const PresentValueOfAnAnnuityCalculator = () => {
 // Oczekiwana Renta
 const [expectedAnnuity, setExpectedAnnuity] = useState(0)
 // Czas Trwania
 const [duration, setDuration] = useState(0)
 // Wymagana Stopa Zwrotu
 const [requiredInterestRate, setRequiredInterestRate] = useState(0)

 const handleSetExpectedAnnuity = (e: ChangeEvent<HTMLInputElement>) => {
  setExpectedAnnuity(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
 }
 const handleSetDuration = (e: ChangeEvent<HTMLInputElement>) => {
   setDuration(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
 }

 const handleSetRequiredInterestRate = (e: ChangeEvent<HTMLInputElement>) => {
  setRequiredInterestRate(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
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
   nominalValue: 0,
   accruedInterest: 0
 })
 
 const compoundInterestCalculateResults = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  presentValueOfAnAnnuityResults(
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
        presentValue={resultCompoundInterestCalculate.presentValue}
        nominalValue={resultCompoundInterestCalculate.nominalValue}
        accruedInterest={resultCompoundInterestCalculate.accruedInterest}
      />
    </div>
  )
}

export default PresentValueOfAnAnnuityCalculator