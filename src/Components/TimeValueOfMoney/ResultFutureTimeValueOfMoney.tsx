import "../../Styles/Result.sass"

interface CompoundInterestCalculateResult {
  investmentResult: number;
  investedAmountValue: number;
  accruedInterest: number;
}


const ResultFutureTimeValueOfMoney = ({ investmentResult, investedAmountValue, accruedInterest }: CompoundInterestCalculateResult) => {
  const jsxInvestmentResult = investmentResult.toFixed(2)
  const jsxParsedExpectedFinalValue = investedAmountValue.toFixed(2)
  const jsxAccruedInterest = accruedInterest.toFixed(2)
  return (
    <div className='result'>
      <p className='result__item'>Efektem inwestycji Będzie kwota: {jsxInvestmentResult}</p>
      <p className='result__item'>Zainwestowana Kwota wynosi: {jsxParsedExpectedFinalValue}</p>
      <p className='result__item'>Narosłe odsetki wynoszą: {jsxAccruedInterest}</p>
    </div>
  )
}

export default ResultFutureTimeValueOfMoney

