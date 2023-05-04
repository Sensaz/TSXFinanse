import { ChangeEvent, useState, MouseEvent } from "react"
import FutureValueOfAnAnnuityForm from "./FutureValueOfAnAnnuityForm"
import ResultTimeValueOfMoney from "../ResultTimeValueOfMoney"
import futureValueOfAnnuityFunction from "./FunctionForTest"

const FutureValueOfAnAnnuityCalculator = () => {
  // Wysokość Renty
  const [pensionAmount, setPenstionAmount] = useState("")
  const handleSetPenstionAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setPenstionAmount(e.target.value)
  }

  // Czas Trwania Inwestycji
  const [duration, setDuration] = useState("")
  const handleSetDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setDuration(e.target.value)
  }

  // Roczne Oprocentowanie 
  const [interestRate, setInterestRate] = useState("")
  const handleSetInterestRate = (e: ChangeEvent<HTMLInputElement>) => {
    setInterestRate(e.target.value)
  }
 
  // Renta Płatna z Góry/Dłu
  const [annuityPaymentOption, setAnnuityPaymentOption] = useState("")
  const handleSetAnnuityPaymentOption = (e: ChangeEvent<HTMLInputElement>) => {
    setAnnuityPaymentOption(e.target.value)
  }

  // Renta płatna co Rok / Pół Roku / Kwartał / Miesiąc
  const [annuityPaymentFrequency, setAnnuityPaymentFrequency] = useState("")
  const handleSetAnnuityPaymentFrequency = (e: ChangeEvent<HTMLInputElement>) => {
    setAnnuityPaymentFrequency(e.target.value)
  }

  // Czas Trwania Podany w Miesiącach / Latach
  const [optionDuration, setOptionDuration] = useState("")
  const handleSetOptionDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionDuration(e.target.value)
  }

  const [resultCompoundInterestCalculate, setResultCompoundInterestCalculate] = useState({
    parsedPensionAmount: 0,
    investmentResult: 0,
    accruedInterest: 0
  })

  const compoundInterestCalculateResults = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    futureValueOfAnnuityFunction(
      pensionAmount,
      duration,
      interestRate,
      optionDuration,
      annuityPaymentOption,
      annuityPaymentFrequency,
      setResultCompoundInterestCalculate
    )
  }

  // Funkcja do przeliczania lat na miesięcy oraz dzielenia tego w zależności od jak często renta jest płacona wynik zaokrąglony w dół bez miejsc po przecinku
  // Funkcja renty płatnej z góry
      // -- NumberOfAnnuityPeriods
  // Funkcja renty płatnej z dołu 
  // Funkcja łącząca te mechanizmy ze sprawdzeniem czy renta jest płatna z góry czy z dołu

  return (
    <div>
      <FutureValueOfAnAnnuityForm
        pensionAmount={pensionAmount}
        duration={duration}
        interestRate={interestRate}
        handleSetPenstionAmount={handleSetPenstionAmount}
        handleSetDuration={handleSetDuration}
        handleSetInterestRate={handleSetInterestRate}
        handleSetAnnuityPaymentOption={handleSetAnnuityPaymentOption}
        handleSetAnnuityPaymentFrequency={handleSetAnnuityPaymentFrequency}
        handleSetOptionDuration={handleSetOptionDuration}
        calculate={compoundInterestCalculateResults}
      />
      <ResultTimeValueOfMoney
        parsedStartValue={resultCompoundInterestCalculate.parsedPensionAmount}
        investmentResult={resultCompoundInterestCalculate.investmentResult}
        accruedInterest={resultCompoundInterestCalculate.accruedInterest}
      />
    </div>
  )
}

export default FutureValueOfAnAnnuityCalculator