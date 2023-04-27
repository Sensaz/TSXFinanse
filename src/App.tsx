import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import Page from "./Page";
import './Styles/App.sass'

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <nav className="app__navigation">
            <Navigation />
          </nav>
          <main className="app__main">
            <Page />
          </main>
        </div>
      </Router>
    </>
  )
}

export default App
