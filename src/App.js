import React from 'react'
import { About, Contact, Footer, Header, Home, Application } from './components'
import {
  OtherData,
  QuoteData,
  QuoteAdapt
} from './components/utils/banner/InnerBanners'
import { Banner } from './components/utils/Banner'
import { AppProvider } from './context/AppContext'

import data from './assets/data.png'
import quote from './assets/process.jpg'
import adapt from './assets/adapt.png'

function App() {
  return (
    <div className="">
      <AppProvider>
        <Header />
        <Home />
        <Banner bg={adapt} overlay="transparent">
          <QuoteAdapt />
        </Banner>
        <Application />
        <Banner white bg={quote} overlay="#414141">
          <QuoteData />
        </Banner>
        <About />
        <Banner
          title="Algunos datos curiosos"
          white
          bg={data}
          overlay="#505050"
        >
          <OtherData />
        </Banner>

        <Contact />
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App
