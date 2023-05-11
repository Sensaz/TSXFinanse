import { useSelector } from "react-redux";
import "../../Styles/Result.sass"

interface CompoundInterestCalculateResult {
  presentValue: number;
  nominalValue: number;
  accruedInterest: number;
}


const ResultPresentTimeValueOfMoney = ({ presentValue, nominalValue, accruedInterest }: CompoundInterestCalculateResult) => {
  const navigationForSmallDeviceState = useSelector((state: any) => state.navigationForSmallDevice.flag)

  const jsxPresentValue = presentValue <= 0 ? "0.00" : presentValue.toFixed(2)
  const jsxNominalValue = nominalValue <= 0 ? "0.00" : nominalValue.toFixed(2)
  const jsxAccruedInterest = accruedInterest <= 0 ? "0.00" : accruedInterest.toFixed(2)

  const checkAppIsBlur = navigationForSmallDeviceState ? -1 : 0
  return (
    <div className='result'>
      <h2 tabIndex={checkAppIsBlur} className='result__item'>Wartość Obecna Inwestycji: {jsxPresentValue}</h2>
      <h2 tabIndex={checkAppIsBlur} className='result__item'>Wartość Nominalna wyniesie: {jsxNominalValue}</h2>
      <h2 tabIndex={checkAppIsBlur} className='result__item'>Różnica: {jsxAccruedInterest}</h2>
    </div>
  )
}

export default ResultPresentTimeValueOfMoney

