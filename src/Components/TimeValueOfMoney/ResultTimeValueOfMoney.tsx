import "../../Styles/Result.sass"

interface CompoundInterestCalculateResult {
  investmentResult: number;
  parsedExpectedFinalValue: number;
  accruedInterest: number;
}


const ResultTimeValueOfMoney = ({ parsedStartValue, investmentResult, accruedInterest }: CompoundInterestCalculateResult) => {
  const jsxInvestmentResult = investmentResult > 0 ? investmentResult : investmentResult.toFixed(2)
  const jsxParsedExpectedFinalValue = parsedStartValue > 0 ? parsedStartValue : parsedStartValue.toFixed(2)
  const jsxAccruedInterest = accruedInterest > 0 ? accruedInterest : accruedInterest.toFixed(2)
  return (
    <div className='result'>
      <p className='result__item'>Efektem inwestycji Będzie kwota: {jsxInvestmentResult}</p>
      <p className='result__item'>Zainwestowana Kwota wynosi: {jsxParsedExpectedFinalValue}</p>
      <p className='result__item'>Narosłe odsetki wynoszą: {jsxAccruedInterest}</p>
    </div>
  )
}

export default ResultTimeValueOfMoney

