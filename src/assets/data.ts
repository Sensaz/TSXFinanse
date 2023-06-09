// -----------------------------------------------
// ---------------- MODALS -----------------------
// -----------------------------------------------

type modalContentType = {
  [key: string]: string
}

export const modalContentForLoanAmortizationSimulationTable: modalContentType =
  {
    SPD: 'Rozwinięciem Skrótu jest Saldo Początkowe Długu, określa ile wynosi saldo tego właśnie długu na początek danego okresu, właściwością SPD jest to że jest równe SKD (saldu końcowemu długu) z poprzedniego okresu',
    ODS: 'Rozwinięciem skrótu są odsetki, jak sama nazwa mówi jest to kwota która nie idzie na spłate stanu zadłużenia tylko do jako czysty zysk do banku',
    RK: 'Rozwinięciem skrótu jest Rata Kapitałowa, jest to kwota jaka bezpośrednio idzie na spłate stanu zadłużenia',
    RPK: 'Rozwinięciem skrótu jest Rata Płatności Kredytu, stanowi ona sume odsetek (ODS) z ratą kapitałową (RK), jej interpretacja jest następująca: tyle właśnie oddamy bankowi za ten okres spłaty zadłużenia',
    SKD: 'Rozwinięciem skrótu jest Saldo Końcowe Długu oznacza ono jaki jest nasz stan zadłużenia po zapłacie raty kapitałowej (RK) czyli ile jeszcze musimy oddać bankowi bez odsetek, wynik ten stanowi saldo początkowe długu (SPD) na początek następnego okresu',
  }

// -----------------------------------------------
// ---------------- MODALS -----------------------
// -----------------------------------------------

// -----------------------------------------------
// ---------------- SELECT FORM ------------------
// -----------------------------------------------

type SelectOptionType = {
  value: string
  content: string
}

type SelectTypePropertyType = {
  [key: string]: SelectOptionType[]
}

export const loanAmortizationSimulationSelectProperty: SelectTypePropertyType =
  {
    propertyForSetOptionDuration: [
      { value: '', content: 'Podany' },
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

export const futureValueOfAnAnnuitySelectProperty: SelectTypePropertyType = {
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

export const valueOfASingleFlowSelectProperty: SelectTypePropertyType = {
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

export const presentValueOfAnAnnuitySelectProperty: SelectTypePropertyType = {
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

// -----------------------------------------------
// ---------------- SELECT FORM ------------------
// -----------------------------------------------

// -----------------------------------------------
// ---------------- RESULT DATA ------------------
// -----------------------------------------------

type ResultPropertyType = {
  info: string
  toCalc: string
  unit: string
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
    toCalc: 'investedAmountValue',
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

// -----------------------------------------------
// ---------------- RESULT DATA ------------------
// -----------------------------------------------

// -----------------------------------------------
// ---------------- DROPDOWN DATA ----------------
// -----------------------------------------------

type DropDownItemType = {
  id: number
  info: string
  path: string
}

type ContentForDropDownType = {
  [key: string]: DropDownItemType[]
}

export const contentForDropDown: ContentForDropDownType = {
  dropDownContentForTimeValueOfMoney: [
    {
      id: 0,
      info: 'Wartość przyszła pojedynczego przepływu',
      path: 'TimeValueOfMoney/FutureValueOfASingleFlowCalculator',
    },
    {
      id: 1,
      info: 'Wartość obecna pojedynczego przepływu',
      path: 'TimeValueOfMoney/PresentValueOfASingleFlowCalculator',
    },
    {
      id: 2,
      info: 'Wartość przyszła renty',
      path: 'TimeValueOfMoney/FutureValueOfAnAnnuityCalculator',
    },
    {
      id: 3,
      info: 'Wartość obecna renty',
      path: 'TimeValueOfMoney/PresentValueOfAnAnnuityCalculator',
    },
    {
      id: 4,
      info: 'Jak to działa',
      path: 'KnowledgeBase/FinancialInstruments',
    },
  ],
  dropDownContentForCredits: [
    {
      id: 0,
      info: 'Symulacja Amortyzacji Kredytu',
      path: 'Credits/LoanAmortizationSimulation',
    },
    {
      id: 1,
      info: 'Kalkulator Zdolności Kredytowej',
      path: 'Credits/CreditCalculator',
    },
    {
      id: 2,
      info: 'Jak to działa',
      path: 'KnowledgeBase/FinancialInstruments',
    },
  ],
  dropDownContentForFinancialInstrumentValution: [
    {
      id: 0,
      info: 'Obligacji',
      path: 'FinancialInstrumentsValuation/BondValuationCalculator',
    },
    {
      id: 1,
      info: 'Akcji',
      path: 'FinancialInstrumentsValuation/EquitiesValuationCalculator',
    },
    {
      id: 2,
      info: 'Opcji',
      path: 'FinancialInstrumentsValuation/OptionValutionCalculator',
    },
    {
      id: 3,
      info: 'Kontraktu Futures i Forword',
      path: 'FinancialInstrumentsValuation/FuturesAndForwardsCalculator',
    },
    {
      id: 4,
      info: 'Kontraktu Swap',
      path: 'FinancialInstrumentsValuation/SwapPricingCalculator',
    },
    {
      id: 5,
      info: 'Jak to działa?',
      path: 'KnowledgeBase/FinancialInstruments',
    },
  ],

  dropDownContentForKnowledgeBase: [
    {
      id: 0,
      info: 'Instrumenty Finansowe',
      path: 'KnowledgeBase/FinancialInstruments',
    },
    {
      id: 1,
      info: 'Strategie Inwestycyjne',
      path: 'KnowledgeBase/FinancialInstruments',
    },
    {
      id: 2,
      info: 'Opis Rozwiązań w Aplikacji',
      path: 'KnowledgeBase/FinancialInstruments',
    },
  ],
}

// -----------------------------------------------
// ---------------- DROPDOWN DATA ----------------
// -----------------------------------------------

// -----------------------------------------------
// ---------------- TABLE THEAD ------------------
// -----------------------------------------------

type TableColumnType = {
  id: number
  content: string
}

export const theadArrForLoanAmortizationSimulation: TableColumnType[] = [
  { id: 0, content: 'SPD' },
  { id: 1, content: 'ODS' },
  { id: 3, content: 'RK' },
  { id: 4, content: 'RPK' },
  { id: 5, content: 'SKD' },
]

// -----------------------------------------------
// ---------------- TABLE THEAD ------------------
// -----------------------------------------------
