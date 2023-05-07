import { ChangeEvent, useState, MouseEvent } from "react";
import CompoundInterestForm from "./FutureValueOfASingleFlowForm.tsx";
import ResultFutureTimeValueOfMoney from "../ResultFutureTimeValueOfMoney.tsx"
import futureValueOfASingleFlowResult from "./FunctionForTest/futureValueOfASingleFlowResult.ts"


const FutureValueOfASingleFlowCalculator = () => {
  // Kwota początkowa
  const [startValue, setStartValue] = useState(0)
  // Czas Trwania
  const [duration, setDuration] = useState(0)
  // Roczne oprocentowanie
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
    startValue: 0,
    investmentResult: 0,
    accruedInterest: 0
  })

  const compoundInterestCalculateResults = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    futureValueOfASingleFlowResult(
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
      <ResultFutureTimeValueOfMoney
        investmentResult={resultCompoundInterestCalculate.investmentResult}
        investedAmountValue={resultCompoundInterestCalculate.startValue}
        accruedInterest={resultCompoundInterestCalculate.accruedInterest}
      />
    </div>
  );
};

export default FutureValueOfASingleFlowCalculator