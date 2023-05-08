import { ChangeEvent, useState, MouseEvent } from "react";
import PresentValueOfASingleFlowForm from "./PresentValueOfASingleFlowForm.tsx";
import ResultPresentTimeValueOfMoney from "../ResultPresentTimeValueOfMoney.tsx"
import presentValueOfASingleFlowResult from "./FunctionForTest/presentValueOfASingleFlowResult.ts"


const PresentValueOfASingleFlowCalculator = () => {
  // Oczekiwana wartość końcowa
  const [expectedFinalValue, setStartValue] = useState(0)
  // Czas Trwania
  const [duration, setDuration] = useState(0)
  // Oczekiwane oprocentowanie
  const [interestRate, setInterestRate] = useState(0)

  const handleSetStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }
  const handleSetDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setDuration(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }

  const handleSetInterestRate = (e: ChangeEvent<HTMLInputElement>) => {
    setInterestRate(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }


  
  // Czas Trawania podany w latach / miesiącach
  const [optionDuration, setOptionDuration] = useState("")

  // Kapitalizacja oporcentowania
  const [interestCapitalization, setInterestCapitalization] = useState("")
  
  const handleSetOptionDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionDuration(e.target.value)
  }

  const handleSetInterestCapitalization = (e: ChangeEvent<HTMLInputElement>) => {
    setInterestCapitalization(e.target.value)
  }
  
  const [resultCompoundInterestCalculate, setResultCompoundInterestCalculate] = useState({
    presentValue: 0,
    expectedFinalValue: 0,
    accruedInterest: 0
  })
  
  const compoundInterestCalculateResults = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    presentValueOfASingleFlowResult(
      expectedFinalValue,
      duration,
      interestRate,
      optionDuration,
      interestCapitalization,
      setResultCompoundInterestCalculate
      )
  }


  return (
    <div>
      <PresentValueOfASingleFlowForm
        expectedFinalValue={expectedFinalValue}
        duration={duration}
        interestRate={interestRate}
        handleSetStartValue={handleSetStartValue}
        handleSetDuration={handleSetDuration}
        handleSetInterestRate={handleSetInterestRate}
        handleSetOptionDuration={handleSetOptionDuration}
        handleSetInterestCapitalization={handleSetInterestCapitalization}
        calculate={compoundInterestCalculateResults}
      />
      <ResultPresentTimeValueOfMoney
        presentValue={resultCompoundInterestCalculate.presentValue}
        nominalValue={resultCompoundInterestCalculate.expectedFinalValue}
        accruedInterest={resultCompoundInterestCalculate.accruedInterest}
      />
    </div>
  );
};

export default PresentValueOfASingleFlowCalculator