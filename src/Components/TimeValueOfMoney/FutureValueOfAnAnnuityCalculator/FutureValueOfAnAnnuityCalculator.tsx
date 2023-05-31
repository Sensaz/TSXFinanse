import { ChangeEvent, useState, MouseEvent } from 'react'
import FutureValueOfAnAnnuityForm from './FutureValueOfAnAnnuityForm'
import ResultFutureTimeValueOfMoney from '../ResultFutureTimeValueOfMoney.tsx'
import futureValueOfAnAnnuityResult from './futureValueOfAnAnnuityResult.ts'

const FutureValueOfAnAnnuityCalculator = () => {
  // Wysokość Renty
  const [pensionAmount, setPenstionAmount] = useState(0)
  const handleSetPenstionAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setPenstionAmount(
      !Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0
    )
  }

  // Czas Trwania Inwestycji
  const [duration, setDuration] = useState(0)
  const handleSetDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setDuration(!Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0)
  }

  // Roczne Oprocentowanie
  const [interestRate, setInterestRate] = useState(0)
  const handleSetInterestRate = (e: ChangeEvent<HTMLInputElement>) => {
    setInterestRate(
      !Number.isNaN(e.target.value) ? parseFloat(e.target.value) : 0
    )
  }

  // Renta Płatna z Góry/Dłu
  const [annuityPaymentOption, setAnnuityPaymentOption] = useState('')
  const handleSetAnnuityPaymentOption = (e: ChangeEvent<HTMLInputElement>) => {
    setAnnuityPaymentOption(e.target.value)
  }

  // Renta płatna co Rok / Pół Roku / Kwartał / Miesiąc
  const [annuityPaymentFrequency, setAnnuityPaymentFrequency] = useState('')
  const handleSetAnnuityPaymentFrequency = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setAnnuityPaymentFrequency(e.target.value)
  }

  // Czas Trwania Podany w Miesiącach / Latach
  const [optionDuration, setOptionDuration] = useState('')
  const handleSetOptionDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionDuration(e.target.value)
  }

  const [resultCompoundInterestCalculate, setResultCompoundInterestCalculate] =
    useState({
      pensionAmount: 0,
      investmentResult: 0,
      accruedInterest: 0,
    })

  const compoundInterestCalculateResults = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    futureValueOfAnAnnuityResult(
      pensionAmount,
      duration,
      interestRate,
      optionDuration,
      annuityPaymentOption,
      annuityPaymentFrequency,
      setResultCompoundInterestCalculate
    )
  }

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
      <ResultFutureTimeValueOfMoney
        investmentResult={resultCompoundInterestCalculate.investmentResult}
        investedAmountValue={resultCompoundInterestCalculate.pensionAmount}
        accruedInterest={resultCompoundInterestCalculate.accruedInterest}
      />
    </div>
  )
}

export default FutureValueOfAnAnnuityCalculator
