import "../../Styles/Result.sass"

interface CompoundInterestCalculateResult {
  investmentResult: number;
  parsedStartValue: number;
  accruedInterest: number;
}


const ResultTimeValueOfMoney = ({ parsedStartValue, investmentResult, accruedInterest }: CompoundInterestCalculateResult) => {
  const jsxInvestmentResult = investmentResult ? investmentResult : investmentResult.toFixed(2)
  const jsxParsedStartValue = parsedStartValue ? parsedStartValue : parsedStartValue.toFixed(2)
  const jsxAccruedInterest = accruedInterest ? accruedInterest : accruedInterest.toFixed(2)
  return (
    <div className='result'>
      <p className='result__item'>Efektem inwestycji Będzie kwota: {jsxInvestmentResult}</p>
      <p className='result__item'>Zainwestowana Kwota wynosi: {jsxParsedStartValue}</p>
      <p className='result__item'>Narosłe odsetki wynoszą: {jsxAccruedInterest}</p>
    </div>
  )
}

export default ResultTimeValueOfMoney

