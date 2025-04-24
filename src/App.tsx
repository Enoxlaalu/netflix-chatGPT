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
      if (user) {
        navigate('/browse')
      } else {
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
