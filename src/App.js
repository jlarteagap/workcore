import React from 'react'
import { About, Contact, Footer, Header, Home, OtherData } from './components'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <div className="">
      <AppProvider>
        <Header />
        <Home />
        <About />
        <OtherData />
        <Contact />
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App
