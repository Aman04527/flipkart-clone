import React from 'react'
import {Route, Routes} from "react-router-dom"
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'

const App = () => {
  return (
    <div className='w-screen h-auto flex flex-col bg-slate-100'>
        <Header />
        <main className='mt-14 md:mt-20 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
          </Routes>
        </main>
    </div>
  )
}

export default App