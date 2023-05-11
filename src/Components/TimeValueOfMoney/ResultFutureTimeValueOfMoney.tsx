import { useSelector } from "react-redux";
import "../../Styles/Result.sass"

interface CompoundInterestCalculateResult {
  investmentResult: number;
  investedAmountValue: number;
  accruedInterest: number;
}


const ResultFutureTimeValueOfMoney = ({ investmentResult, investedAmountValue, accruedInterest }: CompoundInterestCalculateResult) => {
  const navigationForSmallDeviceState = useSelector((state: any) => state.navigationForSmallDevice.flag)
  
  const jsxInvestmentResult = investmentResult.toFixed(2)
  const jsxParsedExpectedFinalValue = investedAmountValue.toFixed(2)
  const jsxAccruedInterest = accruedInterest.toFixed(2)

  const checkAppIsBlur = navigationForSmallDeviceState ? -1 : 0
  return (
    <div className='result'>
      <h2 tabIndex={checkAppIsBlur}  className='result__item'>Efektem inwestycji Będzie kwota: {jsxInvestmentResult}</h2>
      <h2 tabIndex={checkAppIsBlur} className='result__item'>Zainwestowana Kwota wynosi: {jsxParsedExpectedFinalValue}</h2>
      <h2 tabIndex={checkAppIsBlur} className='result__item'>Narosłe odsetki wynoszą: {jsxAccruedInterest}</h2>
    </div>
  )
}

export default ResultFutureTimeValueOfMoney

