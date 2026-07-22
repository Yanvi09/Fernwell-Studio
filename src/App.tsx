import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import BookingWizard from './pages/BookingWizard'
import BookingConfirmation from './pages/BookingConfirmation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book" element={<BookingWizard />} />
        <Route path="/book/confirmation" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  )
}

export default App
