import { useSelector } from "react-redux";
import "../../Styles/Result.sass"

interface CompoundInterestCalculateResult {
  investmentResult: number;
  investedAmountValue: number;
  accruedInterest: number;
}


const ResultFutureTimeValueOfMoney = ({ investmentResult, investedAmountValue, accruedInterest }: CompoundInterestCalculateResult) => {
  const navigationForSmallDeviceState = useSelector((state: any) => state.navigationForSmallDevice.flag)
  const showPhonButtonState = useSelector((state: any) => state.phoneButton.flag)
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)
  
  const jsxInvestmentResult = investmentResult.toFixed(2)
  const jsxParsedExpectedFinalValue = investedAmountValue.toFixed(2)
  const jsxAccruedInterest = accruedInterest.toFixed(2)
  const checkTabIndex = showPhonButtonState && navigationForSmallDeviceState ? 1 : -1
  
  return (
    <div className='result'>
      <h2 tabIndex={checkTabIndex}  className='result__item'>Efektem inwestycji Będzie kwota: {jsxInvestmentResult}</h2>
      <h2 tabIndex={checkTabIndex} className='result__item'>Zainwestowana Kwota wynosi: {jsxParsedExpectedFinalValue}</h2>
      <h2 tabIndex={checkTabIndex} className='result__item'>Narosłe odsetki wynoszą: {jsxAccruedInterest}</h2>
    </div>
  )
}

export default ResultFutureTimeValueOfMoney

