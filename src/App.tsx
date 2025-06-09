import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import BrowsePage from 'src/pages/BrowsePage/BrowsePage'
import LoginPage from 'src/pages/LoginPage/LoginPage'
import { auth } from 'src/utils/firebase'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const path = document.location.pathname

      if (user && !path.includes('browse')) {
        navigate('/browse')
      } else if (!user && path !== '/') {
        navigate('/')
      }
    })
  }, [])

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/browse" element={<BrowsePage />} />
    </Routes>
  )
}

export default App
