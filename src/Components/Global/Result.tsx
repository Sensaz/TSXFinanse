import { useSelector } from 'react-redux'

interface ResultPropertyType {
  info: string
  toCalc: string
  unit: string
}

interface ResultResultsType {
  [key: string]: number
}

interface ResultProps {
  property: Array<ResultPropertyType>
  results: ResultResultsType
}

const Result = ({ property, results }: ResultProps) => {
  const navigationForSmallDeviceState = useSelector(
    (state: any) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)

  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  console.log(results)

  const result = property.map(({ info, toCalc, unit }, index) => (
    <h2 tabIndex={checkTabIndex} key={index} className="result__item">
      {info}
      {results[toCalc] <= 0 ? '0.00' : results[toCalc].toFixed(2)}
      {unit}
    </h2>
  ))

  //   console.log(result)

  return <div className="result">{result}</div>
}

export default Result
