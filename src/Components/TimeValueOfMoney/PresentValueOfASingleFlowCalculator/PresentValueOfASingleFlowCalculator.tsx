import { ChangeEvent, useState, MouseEvent } from "react";
import PresentValueOfASingleFlowForm from "./PresentValueOfASingleFlowForm.tsx";
import ResultTimeValueOfMoney from "../ResultTimeValueOfMoney.tsx"
import presentValueCalculate from "./FunctionForTest/presentValueCalculate.ts"


const PresentValueOfASingleFlowCalculator = () => {
  // Oczekiwana wartość końcowa
  const [expectedFinalValue, setStartValue] = useState("")
  // Czas Trwania
  const [duration, setDuration] = useState("")
  // Oczekiwane oprocentowanie
  const [interestRate, setInterestRate] = useState("")

  const handleSetStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(e.target.value)
  }
  const handleSetDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setDuration(e.target.value)
  }

  const handleSetInterestRate = (e: ChangeEvent<HTMLInputElement>) => {
    setInterestRate(e.target.value)
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
    parsedExpectedFinalValue: 0,
    investmentResult: 0,
    accruedInterest: 0
  })
  
  const compoundInterestCalculateResults = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    presentValueCalculate(
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
      <ResultTimeValueOfMoney
        parsedExpectedFinalValue={resultCompoundInterestCalculate.parsedExpectedFinalValue}
        investmentResult={resultCompoundInterestCalculate.investmentResult}
        accruedInterest={resultCompoundInterestCalculate.accruedInterest}
      />
    </div>
  );
};

export default PresentValueOfASingleFlowCalculator