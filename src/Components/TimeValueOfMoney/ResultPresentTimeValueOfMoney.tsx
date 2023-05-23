import '../../Styles/Result.sass'
import { resultPropertyForPresentTimeValue } from '../../assets'
import Result from '../Global/Result'

interface CompoundInterestCalculateResult {
  presentValue: number
  nominalValue: number
  accruedInterest: number
}

const ResultPresentTimeValueOfMoney = ({
  presentValue,
  nominalValue,
  accruedInterest,
}: CompoundInterestCalculateResult) => {
  const results = { presentValue, nominalValue, accruedInterest }

  return (
    <Result property={resultPropertyForPresentTimeValue} results={results} />
  )
}

export default ResultPresentTimeValueOfMoney
