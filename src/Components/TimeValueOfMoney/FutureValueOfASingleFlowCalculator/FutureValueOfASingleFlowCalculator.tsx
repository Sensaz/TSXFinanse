import { ChangeEvent, useState, MouseEvent } from "react";
import CompoundInterestForm from "./FutureValueOfASingleFlowForm.tsx";
import ResultTimeValueOfMoney from "../ResultTimeValueOfMoney.tsx"
import compoundInterestCalculate from "./FunctionForTest/compoundInterestCalculate.ts"


const FutureValueOfASingleFlowCalculator = () => {
  // Kwota początkowa
  const [startValue, setStartValue] = useState("")
  // Czas Trwania
  const [duration, setDuration] = useState("")
  // Roczne oprocentowanie
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
    parsedStartValue: 0,
    investmentResult: 0,
    accruedInterest: 0
  })

  const compoundInterestCalculateResults = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    compoundInterestCalculate(
      startValue,
      duration,
      interestRate,
      optionDuration,
      interestCapitalization,
      setResultCompoundInterestCalculate
    )
  }


  return (
    <div>
      <CompoundInterestForm
        startValue={startValue}
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
        parsedStartValue={resultCompoundInterestCalculate.parsedStartValue}
        investmentResult={resultCompoundInterestCalculate.investmentResult}
        accruedInterest={resultCompoundInterestCalculate.accruedInterest}
      />
    </div>
  );
};

export default FutureValueOfASingleFlowCalculator