import './App.css'
import Home from './Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import portfolioNavItems from './components/portfolioNavItems'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {portfolioNavItems.map((item) => (
        <Route
          key={item.id}
          path={item.id}
          element={<Navigate to={`/#${item.id}`} replace />}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
