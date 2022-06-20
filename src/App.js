import React from 'react'
import { Footer, Header, Home } from './components'
import { AppProvider } from './context/AppContext'
function App() {
  return (
    <div className="">
      <AppProvider>
        <Header />
        <Home />
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App
