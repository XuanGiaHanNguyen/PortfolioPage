import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import Home from "./pages/Home"
import Test from "./pages/test"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/PortfolioPage" element={<Home />} />
          <Route path="/PortfolioPage/test" element={<Test />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
