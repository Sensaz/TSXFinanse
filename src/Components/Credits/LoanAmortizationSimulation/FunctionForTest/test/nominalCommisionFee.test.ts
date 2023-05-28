import nominalCommisionFee from '../nominalCommisionFee.ts'

// loanValue: number,
// commisionFee: number,
// doesTheBankChargeACommission: string ChargesAFee

// (commisionFee / 100) * loanValue

describe('creditDurationInMonths should return zero when', () => {
  describe('loanValue tests', () => {
    test('loanValue equal 0', () => {
      expect(nominalCommisionFee(0, 15, 'ChargesAFee')).toBe(0)
    })
    test('loanValue is negative number', () => {
      expect(nominalCommisionFee(-5, 15, 'ChargesAFee')).toBe(0)
    })
    test('loanValue is NaN', () => {
      expect(nominalCommisionFee(NaN, 15, 'ChargesAFee')).toBe(0)
    })
  })
  describe('commisionFee tests', () => {
    test('commisionFee equal 0', () => {
      expect(nominalCommisionFee(10000, 0, 'ChargesAFee')).toBe(0)
    })
    test('commisionFee is negative number', () => {
      expect(nominalCommisionFee(10000, -15, 'ChargesAFee')).toBe(0)
    })
    test('commisionFee is NaN', () => {
      expect(nominalCommisionFee(10000, NaN, 'ChargesAFee')).toBe(0)
    })
  })
  describe('doesTheBankChargeACommission tests', () => {
    test('doesTheBankChargeACommission equal empty string', () => {
      expect(nominalCommisionFee(10000, 15, '')).toBe(0)
    })
    test('doesTheBankChargeACommission is random string', () => {
      expect(nominalCommisionFee(10000, 15, 'kebab')).toBe(0)
    })
  })
})

describe('creditDurationInMonths should return zero when', () => {
  test('loanValue with commisionFee is positive number and doesTheBankChargeACommission equal ChargesAFee', () => {
    expect(nominalCommisionFee(10000, 15, 'ChargesAFee')).toBe(1500)
  })
})
