import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import {AboutMe, Credits, FinancialInstrumentsValuation, HomePage, InvestmentStrategyHelper, KnowledgeBase, TimeValueOfMoney, UserProfil, ErrorPage} from './Components'

const Page = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" replace />} />

      <Route path="/home" element={<HomePage />} />
      
      <Route path="/AboutMe" element={<AboutMe />} />
      
      <Route path="/Credits" element={<Credits />} />
      
      <Route path="/FinancialInstrumentsValuation" element={<FinancialInstrumentsValuation />} />
      
      <Route path="/InvestmentStrategyHelper" element={<InvestmentStrategyHelper />} />
      
      <Route path="/KnowledgeBase" element={<KnowledgeBase />} />
      
      <Route path="/TimeValueOfMoney" element={<TimeValueOfMoney />} />
      
      <Route path="/UserProfil" element={<UserProfil />} />

      <Route path="/error" element={<ErrorPage />} />

      <Route path="*" element={<Navigate to="/error" replace />} />
  </Routes>
  )
}

export default Page