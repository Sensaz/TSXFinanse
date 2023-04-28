import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import {
  AboutMe,
  CreditCalculator,
  LoanAmortizationSimulation,
  BondValuationCalculator,
  EquitiesValuationCalculator,
  FuturesAndForwardsCalculator,
  OptionValutionCalculator,
  SwapPricingCalculator,
  HomePage,
  InvestmentStrategyHelper,
  FinancialInstruments,
  InvestmentStrategies,
  SolutionsInApp,
  CompoundInterestCalculator,
  PresentValueCalculator,
  UserProfil,
  ErrorPage
} from './Components'

const Page = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" replace />} />

      <Route path="/home" element={<HomePage />} />
      
      <Route path="/AboutMe" element={<AboutMe />} />
      
      <Route path="/Credits">
        <Route path="CreditCalculator" element={<CreditCalculator />} />
        <Route path="LoanAmortizationSimulation" element={<LoanAmortizationSimulation />} />
      </Route>

      <Route path="/FinancialInstrumentsValuation">
        <Route path="BondValuationCalculator" element={<BondValuationCalculator />} />
        <Route path="EquitiesValuationCalculator" element={<EquitiesValuationCalculator />} />
        <Route path="FuturesAndForwardsCalculator" element={<FuturesAndForwardsCalculator />} />
        <Route path="OptionValutionCalculator" element={<OptionValutionCalculator />} />
        <Route path="SwapPricingCalculator" element={<SwapPricingCalculator />} />
      </Route>

      <Route path="/InvestmentStrategyHelper" element={<InvestmentStrategyHelper />} />
      
      {/* <Route path="/KnowledgeBase" element={<KnowledgeBase />} /> */}

      <Route path="/KnowledgeBase">
        <Route path="FinancialInstruments" element={<FinancialInstruments />} />
        <Route path="InvestmentStrategies" element={<InvestmentStrategies />} />
        <Route path="SolutionsInApp" element={<SolutionsInApp />} />
      </Route>

      <Route path="/TimeValueOfMoney">
        <Route path="CompoundInterestCalculator" element={<CompoundInterestCalculator />} />
        <Route path="PresentValueCalculator" element={<PresentValueCalculator />} />
      </Route>
      
      <Route path="/UserProfil" element={<UserProfil />} />

      <Route path="/error" element={<ErrorPage />} />

      <Route path="*" element={<Navigate to="/error" replace />} />
  </Routes>
  )
}

export default Page