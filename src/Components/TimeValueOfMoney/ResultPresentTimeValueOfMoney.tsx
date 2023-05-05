import "../../Styles/Result.sass"

interface CompoundInterestCalculateResult {
  investmentResult: number;
  parsedExpectedFinalValue: number;
  accruedInterest: number;
}


const ResultPresentTimeValueOfMoney = ({ parsedExpectedFinalValue, investmentResult, accruedInterest }: CompoundInterestCalculateResult) => {
  const jsxInvestmentResult = investmentResult > 0 ? investmentResult : investmentResult.toFixed(2)
  const jsxParsedExpectedFinalValue = parsedExpectedFinalValue > 0 ? parsedExpectedFinalValue : parsedExpectedFinalValue.toFixed(2)
  const jsxAccruedInterest = accruedInterest > 0 ? accruedInterest : accruedInterest.toFixed(2)
  return (
    <div className='result'>
      <p className='result__item'>Wartość Obecna Inwestycji: {jsxInvestmentResult}</p>
      <p className='result__item'>Wartość Końcowa wyniesie: {jsxParsedExpectedFinalValue}</p>
      <p className='result__item'>Narosłe odsetki wyniosą: {jsxAccruedInterest}</p>
    </div>
  )
}

export default ResultPresentTimeValueOfMoney

