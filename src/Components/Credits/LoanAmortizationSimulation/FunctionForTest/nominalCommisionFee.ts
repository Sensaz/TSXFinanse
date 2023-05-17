import React from 'react'

const nominalCommisionFee = (
  loanValue: number,
  commisionFee: number,
  doesTheBankChargeACommission: string
) => {
  if (
    doesTheBankChargeACommission !== 'ChargesAFee' ||
    loanValue <= 0 ||
    isNaN(loanValue) ||
    commisionFee <= 0 ||
    isNaN(commisionFee)
  )
    return 0

  return (commisionFee / 100) * loanValue
}

export default nominalCommisionFee
