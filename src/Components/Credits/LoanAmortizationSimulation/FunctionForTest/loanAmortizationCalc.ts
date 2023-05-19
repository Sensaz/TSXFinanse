import nominalCommisionFee from './nominalCommisionFee.ts'
import creditDurationInMonths from './creditDurationInMonths.ts'
import numberOfBasePeriodsResult from './numberOfBasePeriodsResult.ts'
import decreasingInstallmentsResults from './decreasingInstallmentsResults.ts'
import fixedInstallmentsResults from './fixedInstallmentsResults.ts'
import interestInstallmentsInAdvance from './interestInstallmentsInAdvance.ts'
import { Action, Dispatch } from '@reduxjs/toolkit'

const loanAmortizationCalc = (
  loanValue: number, // Wysokość Kredytu
  duration: number, // Czas Trwania
  marginOfTheBank: number, // Marża Banku
  commisionFee: number, // Ewentualna Prowizja
  optionDuration: string, // Czas Trwania podany w
  paymentPeriodOfInstallment: string, // Okres Płatności Raty Występuje co
  interestAccrualMethod: string, // Metoda Pobierania Odsetek Przez Bank
  doesTheBankChargeACommission: string, // Czy Bank Pobiera Prowizje
  loanRepaymentMethod: string, // Metoda Spłacania Kredytu
  dispatch: Dispatch<Action>
) => {
  // Czas Trwania w miesiącach
  const durationInMonths = creditDurationInMonths(duration, optionDuration)

  // Liczba okresów bazowych
  const { totalPaymentPeriods, basePeriodsPerYear } = numberOfBasePeriodsResult(
    paymentPeriodOfInstallment,
    durationInMonths
  )

  if (
    loanValue <= 0 ||
    durationInMonths <= 0 ||
    totalPaymentPeriods <= 0 ||
    basePeriodsPerYear <= 0 ||
    (interestAccrualMethod !== 'InterestPaidInAdvance' &&
      interestAccrualMethod !== 'InterestPaidInArrears') ||
    (loanRepaymentMethod !== 'DecreasingInstallments' &&
      loanRepaymentMethod !== 'FixedInstallments')
  )
    return 0
  // Oprocentowanie na początek okresu bazowego
  const interestForBasePeriod = marginOfTheBank / basePeriodsPerYear / 100

  // Wartość prowizji
  const valueOfFee = nominalCommisionFee(
    loanValue,
    commisionFee,
    doesTheBankChargeACommission
  )

  console.log(loanRepaymentMethod)

  if (interestAccrualMethod === 'InterestPaidInAdvance')
    return interestInstallmentsInAdvance(
      loanValue,
      totalPaymentPeriods,
      interestForBasePeriod,
      dispatch
    )

  if (loanRepaymentMethod === 'DecreasingInstallments')
    return decreasingInstallmentsResults(
      loanValue,
      totalPaymentPeriods,
      interestForBasePeriod,
      dispatch
    )

  return fixedInstallmentsResults(
    loanValue,
    totalPaymentPeriods,
    interestForBasePeriod,
    dispatch
  )

  //Info 1: Wysokość kredytu = loanValue
  //Info 2: Kwota którą otrzymasz = loanValue - valueOfFee
  //Info 3: Prowizja wyniesie = valueOfFee
  //Info 4: Nominalna wartość odsetek = [SUMA ODSETEK]
  //Info 5: Nominalnie łącznie oddasz bankowi = loanValue + [SUMA ODSETEK] + valueOfFee
  //Info 6: RRSO wyniesie: chuj wie ile
}

export default loanAmortizationCalc
