import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import BrowsePage from 'src/pages/BrowsePage/BrowsePage'
import GptSearchPage from 'src/pages/GptSearchPage/GptSearchPage'
import LoginPage from 'src/pages/LoginPage/LoginPage'
import { auth } from 'src/utils/firebase'
import Spinner from 'src/components/Spinner/Spinner'

const App = () => {
  const navigate = useNavigate()
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthLoading(false)

      const path = document.location.pathname

      if (user && path === '/') {
        navigate('/browse')
      } else if (!user && path !== '/') {
        navigate('/')
      }
    })

    return unsubscribe
  }, [navigate])

  if (authLoading) return <Spinner />

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/browse" element={<BrowsePage />} />
      <Route path="/gptSearch" element={<GptSearchPage />} />
    </Routes>
  )
}

export default App
