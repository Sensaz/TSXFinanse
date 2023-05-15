import { useSelector } from 'react-redux'
import '../../../Styles/Table.sass'
import '../../../Styles/Result.sass'
const LoanAmortizationSimulationResult = () => {
  const navigationForSmallDeviceState = useSelector((state: any) => state.navigationForSmallDevice.flag)
  
  const checkAppIsBlur = navigationForSmallDeviceState ? -1 : 0

  return (
    <>
      <table className='table'>
        <thead className='table__header'>
          <th className='table__header-column'>
            #
          </th>
          <th className='table__header-column'>SPD <span tabIndex={checkAppIsBlur} className='table__header--info'>i</span></th>
          <th className='table__header-column'>ODS <span tabIndex={checkAppIsBlur} className='table__header--info'>i</span></th>
          <th className='table__header-column'>RK <span tabIndex={checkAppIsBlur} className='table__header--info'>i</span></th>
          <th className='table__header-column'>RPK <span tabIndex={checkAppIsBlur} className='table__header--info'>i</span></th>
          <th className='table__header-column'>SKD <span tabIndex={checkAppIsBlur} className='table__header--info'>i</span></th>
        </thead>
        <tbody className='table__body'>
        <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>3</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>4</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
        </tr>
        <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>3</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>4</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
        </tr>
        <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>3</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>4</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
        </tr>   
        <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>3</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>4</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
        </tr>
        <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>3</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>4</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
        </tr>
        <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>3</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>4</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
        </tr>   
        <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>3</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>4</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
        </tr>
        <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>3</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>4</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
        </tr>
        <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>3</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>4</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
        </tr>   
        <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>3</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>4</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
        </tr>
        <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>3</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>4</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
        </tr>
        <tr className='table__body-row'>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>2</td>
            <td className='table__body-short'>1</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
            <td className='table__body-short'>10</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>3</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>
          <tr className='table__body-row'>
            <td className='table__body-short'>4</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
            <td className='table__body-short'>100000000000000</td>
          </tr>   
        </tbody>
      </table>

      <div className='result'>
        <h2 tabIndex={checkAppIsBlur}  className='result__item'>Wysokość kredytu: </h2>
        <h2 tabIndex={checkAppIsBlur} className='result__item'>Kwota którą otrzymasz: </h2>
        <h2 tabIndex={checkAppIsBlur} className='result__item'>Prowizja wyniesie:</h2>
        <h2 tabIndex={checkAppIsBlur} className='result__item'>Nominalna wartość odsetek: </h2>
        <h2 tabIndex={checkAppIsBlur} className='result__item'>Nominalnie łącznie oddasz bankowi: </h2>
        <h2 tabIndex={checkAppIsBlur} className='result__item'>RRSO wyniesie: </h2>
    </div>
    </>
  )
}

export default LoanAmortizationSimulationResult