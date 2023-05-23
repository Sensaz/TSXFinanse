type modalContentType = {
  [key: string]: string
}

type ResultPropertyType = {
  info: string
  toCalc: string
  unit: string
}

export const modalContentForLoanAmortizationSimulationTable: modalContentType =
  {
    SPD: 'Rozwinięciem Skrótu jest Saldo Początkowe Długu, określa ile wynosi saldo tego właśnie długu na początek danego okresu, właściwością SPD jest to że jest równe SKD (saldu końcowemu długu) z poprzedniego okresu',
    ODS: 'Rozwinięciem skrótu są odsetki, jak sama nazwa mówi jest to kwota która nie idzie na spłate stanu zadłużenia tylko do jako czysty zysk do banku',
    RK: 'Rozwinięciem skrótu jest Rata Kapitałowa, jest to kwota jaka bezpośrednio idzie na spłate stanu zadłużenia',
    RPK: 'Rozwinięciem skrótu jest Rata Płatności Kredytu, stanowi ona sume odsetek (ODS) z ratą kapitałową (RK), jej interpretacja jest następująca: tyle właśnie oddamy bankowi za ten okres spłaty zadłużenia',
    SKD: 'Rozwinięciem skrótu jest Saldo Końcowe Długu oznacza ono jaki jest nasz stan zadłużenia po zapłacie raty kapitałowej (RK) czyli ile jeszcze musimy oddać bankowi bez odsetek, wynik ten stanowi saldo początkowe długu (SPD) na początek następnego okresu',
  }

export const loanAmortizationSimulationSelectProperty = {
  propertyForSetOptionDuration: [
    { value: '', content: 'Pdany' },
    { value: 'DurationInMonths', content: 'W Miesiącach' },
    { value: 'DurationInYears', content: 'W Latach' },
  ],

  propertyForSetPaymentPeriodOfInstallment: [
    { value: '', content: 'Okres Płatności Raty Występuje co' },
    { value: 'DurationInYears', content: 'Rok' },
    { value: 'DurationInHalfYears', content: 'Pół roku' },
    { value: 'DurationInQarters', content: 'Kwartał' },
    { value: 'DurationInMonths', content: 'Miesiąc' },
  ],

  propertyForSetInterestAccrualMethod: [
    { value: '', content: 'Metoda Pobierania Odsetek Przez Bank' },
    { value: 'InterestPaidInAdvance', content: 'Z Góry' },
    { value: 'InterestPaidInArrears', content: 'Z Dołu' },
  ],

  propertyForSetDoesTheBankChargeACommission: [
    { value: '', content: 'Czy Bank Pobiera Prowizje' },
    { value: 'ChargesAFee', content: 'Tak' },
    { value: 'DoesNotChargeAFee', content: 'Nie' },
  ],

  propertyForSetLoanRepaymentMethod: [
    { value: '', content: 'Metoda Spłacania kredytu' },
    {
      value: 'DecreasingInstallments',
      content: 'Równe Raty Kapitałowe (Rata Malejąca)',
    },
    {
      value: 'FixedInstallments',
      content: 'Równe Raty Płatności Kredytu (Rata Stała)',
    },
  ],
}

export const futureValueOfAnAnnuitySelectProperty = {
  propertyForSetAnnuityPaymentOption: [
    { value: '', content: 'Renta płatna z' },
    { value: 'AnnuityPaidInAdvance', content: 'Góry' },
    { value: 'AnnuityPayableInAdvance', content: 'Dołu' },
  ],
  propertyForSetOptionDuration: [
    { value: '', content: 'Podany' },
    { value: 'DurationInMonths', content: 'W Miesiącach' },
    { value: 'DurationInYears', content: 'W Latach' },
  ],
  propertyForSetAnnuityPaymentFrequency: [
    { value: '', content: 'Renta płatna co' },
    { value: 'AnnuityAnnually', content: 'Rok' },
    { value: 'AnnuitySemiAnnually', content: 'Pół roku' },
    { value: 'AnnuityQuarterly', content: 'Kwartał' },
    { value: 'AnnuityMonthly', content: 'Miesiąc' },
  ],
}

export const valueOfASingleFlowSelectProperty = {
  propertyForSetOptionDuration: [
    { value: '', content: 'Podany' },
    { value: 'DurationInMonths', content: 'W Miesiącach' },
    { value: 'DurationInYears', content: 'W Latach' },
  ],
  propertyForSetInterestCapitalization: [
    { value: '', content: 'Kapitalizacja Oprocentowania' },
    { value: 'AnnualCapitalization', content: 'Roczna' },
    { value: 'SemiAnnualCapitalization', content: 'Półroczna' },
    { value: 'QuarterlyCapitalization', content: 'Kwartalna' },
    { value: 'MonthlyCapitalization', content: 'Miesięczna' },
    { value: 'DailyCapitalization', content: 'Dzienna' },
    { value: 'ContinuousCapitalization', content: 'Ciągła' },
  ],
}

export const presentValueOfAnAnnuitySelectProperty = {
  propertyForSetAnnuityRecived: [
    { value: '', content: 'Renta otrzymywana z' },
    { value: 'AnnuityPaidInAdvance', content: 'Góry' },
    { value: 'AnnuityPayableInAdvance', content: 'Dołu' },
  ],
  propertyForSetOptionDuration: [
    { value: '', content: 'Podany' },
    { value: 'DurationInMonths', content: 'W Miesiącach' },
    { value: 'DurationInYears', content: 'W Latach' },
  ],
  propertyForSetAnnuityCapitalization: [
    { value: '', content: 'Renta otrzymywana co' },
    { value: 'AnnuityAnnually', content: 'Rok' },
    { value: 'AnnuitySemiAnnually', content: 'Pół roku' },
    { value: 'AnnuityQuarterly', content: 'Kwartał' },
    { value: 'AnnuityMonthly', content: 'Miesiąc' },
  ],
}

export const resultPropertyForLoanAmortizationSimulationResult: ResultPropertyType[] =
  [
    {
      info: 'Wysokość kredytu: ',
      toCalc: 'loanAmount',
      unit: '',
    },
    {
      info: 'Kwota którą otrzymasz: ',
      toCalc: 'amountYouWillReceive',
      unit: '',
    },
    {
      info: 'Prowizja wyniesie: ',
      toCalc: 'commissionWillBe',
      unit: '',
    },
    {
      info: 'Nominalna wartość odsetek: ',
      toCalc: 'nominalInterestValue',
      unit: '',
    },
    {
      info: 'Nominalnie oddasz bankowi: ',
      toCalc: 'repaymentNominal',
      unit: '',
    },
    {
      info: 'RRSO wyniesie: ',
      toCalc: 'annualPercentageRate',
      unit: ' %',
    },
  ]

export const resultPropertyForFutureTimeValue: ResultPropertyType[] = [
  {
    info: 'Efektem inwestycji Będzie kwota: ',
    toCalc: 'investmentResult',
    unit: '',
  },
  {
    info: 'Zainwestowana Kwota wynosi: ',
    toCalc: 'parsedExpectedFinalValue',
    unit: '',
  },
  {
    info: 'Narosłe odsetki wynoszą: ',
    toCalc: 'accruedInterest',
    unit: '',
  },
]

export const resultPropertyForPresentTimeValue: ResultPropertyType[] = [
  {
    info: 'Wartość Obecna Inwestycji: ',
    toCalc: 'presentValue',
    unit: '',
  },
  {
    info: 'Wartość Nominalna wyniesie: ',
    toCalc: 'nominalValue',
    unit: '',
  },
  {
    info: 'Różnica: ',
    toCalc: 'accruedInterest',
    unit: '',
  },
]
