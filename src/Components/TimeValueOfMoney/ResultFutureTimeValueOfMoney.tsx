import { Result } from '../Global'
import { resultPropertyForFutureTimeValue } from '../../assets'
import '../../Styles/Result.sass'

interface CompoundInterestCalculateResult {
  investmentResult: number
  investedAmountValue: number
  accruedInterest: number
}

const ResultFutureTimeValueOfMoney = ({
  investmentResult,
  investedAmountValue,
  accruedInterest,
}: CompoundInterestCalculateResult) => {
  const results = {
    investmentResult,
    investedAmountValue,
    accruedInterest,
  }

  return (
    <Result property={resultPropertyForFutureTimeValue} results={results} />
  )
}

export default ResultFutureTimeValueOfMoney
