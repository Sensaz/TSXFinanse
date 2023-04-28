import { ComponentType } from 'react'
import AboutMe from './AboutMe'
import CreditCalculator from './Credits/CreditCalculator'
import LoanAmortizationSimulation from './Credits/LoanAmortizationSimulation'

import BondValuationCalculator from './FinancialInstrumentsValuation/BondValuationCalculator'
import EquitiesValuationCalculator from './FinancialInstrumentsValuation/EquitiesValuationCalculator'
import FuturesAndForwardsCalculator from './FinancialInstrumentsValuation/FuturesAndForwardsCalculator'
import OptionValutionCalculator from './FinancialInstrumentsValuation/OptionValutionCalculator'
import SwapPricingCalculator from './FinancialInstrumentsValuation/SwapPricingCalculator'

import HomePage from './Home'

import InvestmentStrategyHelper from './InvestmentStrategyHelper'

import FinancialInstruments from './KnowledgeBase/FinancialInstruments'
import InvestmentStrategies from './KnowledgeBase/InvestmentStrategies'
import SolutionsInApp from './KnowledgeBase/SolutionsInApp'

import CompoundInterestCalculator from './TimeValueOfMoney/CompoundInterestCalculator'
import PresentValueCalculator from './TimeValueOfMoney/PresentValueCalculator'

import UserProfil from './UserProfil'

import ErrorPage from './ErrorPage'

console.log(PresentValueCalculator)

export {
  AboutMe,
  CreditCalculator,
  LoanAmortizationSimulation,
  SwapPricingCalculator,
  FuturesAndForwardsCalculator,
  EquitiesValuationCalculator,
  OptionValutionCalculator,
  BondValuationCalculator,
  HomePage,
  InvestmentStrategyHelper,
  FinancialInstruments,
  InvestmentStrategies,
  SolutionsInApp,
  CompoundInterestCalculator,
  PresentValueCalculator,
  UserProfil,
  ErrorPage,
}
