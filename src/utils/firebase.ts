import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCWQ3HidHBYT8OWsU40IKBRwo7WqFMUHf4',
  authDomain: 'netflix-gpt-32f4a.firebaseapp.com',
  projectId: 'netflix-gpt-32f4a',
  storageBucket: 'netflix-gpt-32f4a.firebasestorage.app',
  messagingSenderId: '645477659656',
  appId: '1:645477659656:web:6a5ec528926ecfe4cdcdbd',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const auth = getAuth()
