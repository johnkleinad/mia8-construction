import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { OnePager } from './pages/OnePager'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/go" element={<OnePager />} />
    </Routes>
  )
}
