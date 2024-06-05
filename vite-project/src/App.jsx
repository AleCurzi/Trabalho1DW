import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lista from './pages/lista/Lista'
import DigitalClock from './pages/DigitalClock/DigitalClock'
import { FormPage } from './pages/FormPage/FormPage'
import { SearchableList } from './pages/SearchableList/SearchableList'
import BackgroundColorChanger from './pages/BackgroundColorChanger/BackgroundColorChanger'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BackgroundColorChanger/>
    </>
  )
}
export default App
