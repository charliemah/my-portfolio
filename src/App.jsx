import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const Navigation = lazy(() =>
  import('./routes/navigation')
)
const Home = lazy(() => import('./routes/home'))

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
