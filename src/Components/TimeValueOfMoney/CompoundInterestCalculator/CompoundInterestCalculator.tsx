import { ChangeEvent, useState } from "react";
import CompoundInterestForm from "./CompoundInterestForm";

const CompoundInterestCalculator = () => {
  // Kwota początkowa
  const [startValue, setStartValue] = useState("")
  // Czas Trwania
  const [duration, setDuration] = useState("")
  // Roczne oprocentowanie
  const [interestRate, setInterestRate] = useState("")
  // Wysokość dodatkowych wpłat
  const [additionalPaymentAmount, setAdditionalPaymentAmount] = useState("")

  const handleSetStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(e.target.value)
  }
  const handleSetDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setDuration(e.target.value)
  }

  const handleSetInterestRate = (e: ChangeEvent<HTMLInputElement>) => {
    setInterestRate(e.target.value)
  }

  const handleSetAdditionalPaymentAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAdditionalPaymentAmount(e.target.value)
  }
  
  // Czas Trawania podany w latach / miesiącach
  const [optionDuration, setOptionDuration] = useState("")

  // Kapitalizacja oporcentowania
  const [interestCapitalization, setInterestCapitalization] = useState("")

  // Częstotliwość dodatkowych wpłat
  const [additionalPaymentFrequency, setAdditionalPaymentFrequency] = useState("")
  
  const handleSetOptionDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionDuration(e.target.value)
  }

  const handleSetInterestCapitalization = (e: ChangeEvent<HTMLInputElement>) => {
    setInterestCapitalization(e.target.value)
  }

  const handleSetAdditionalPaymentFrequency = (e: ChangeEvent<HTMLInputElement>) => {
    setAdditionalPaymentFrequency(e.target.value)
  }
  


  return (
    <div>
      <CompoundInterestForm
        startValue={startValue}
        duration={duration}
        interestRate={interestRate}
        additionalPaymentAmount={additionalPaymentAmount}
        optionDuration={optionDuration}
        interestCapitalization={interestCapitalization}
        additionalPaymentFrequency={additionalPaymentFrequency}
        handleSetStartValue={handleSetStartValue}
        handleSetDuration={handleSetDuration}
        handleSetInterestRate={handleSetInterestRate}
        handleSetAdditionalPaymentAmount={handleSetAdditionalPaymentAmount}
        handleSetOptionDuration={handleSetOptionDuration}
        handleSetInterestCapitalization={handleSetInterestCapitalization}
        handleSetAdditionalPaymentFrequency={handleSetAdditionalPaymentFrequency}
      />     
    </div>
  );
};


export default CompoundInterestCalculator