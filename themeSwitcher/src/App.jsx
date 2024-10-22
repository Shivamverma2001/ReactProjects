import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import Themebtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    const htmlObject = document.querySelector('html')
    htmlObject.classList.remove("light","dark")
    htmlObject.classList.add(themeMode)
  },[themeMode])

  return (
  <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
