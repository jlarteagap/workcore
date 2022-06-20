import React from 'react'
import { Header, Home } from './components'
import { AppProvider } from './context/AppContext'
function App() {
  return (
    <div className="">
      <AppProvider>
        <Header />
        <Home />
      </AppProvider>
    </div>
  )
}

export default App
