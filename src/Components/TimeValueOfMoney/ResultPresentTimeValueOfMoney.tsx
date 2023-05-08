import "../../Styles/Result.sass"

interface CompoundInterestCalculateResult {
  presentValue: number;
  nominalValue: number;
  accruedInterest: number;
}


const ResultPresentTimeValueOfMoney = ({ presentValue, nominalValue, accruedInterest }: CompoundInterestCalculateResult) => {
  const jsxPresentValue = presentValue <= 0 ? "0.00" : presentValue.toFixed(2)
  const jsxNominalValue = nominalValue <= 0 ? "0.00" : nominalValue.toFixed(2)
  const jsxAccruedInterest = accruedInterest <= 0 ? "0.00" : accruedInterest.toFixed(2)
  return (
    <div className='result'>
      <p className='result__item'>Wartość Obecna Inwestycji: {jsxPresentValue}</p>
      <p className='result__item'>Wartość Nominalna wyniesie: {jsxNominalValue}</p>
      <p className='result__item'>Różnica: {jsxAccruedInterest}</p>
    </div>
  )
}

export default ResultPresentTimeValueOfMoney

