import React, { Suspense, useEffect } from 'react'
import {Route, Routes} from "react-router-dom"
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import { auth } from '../config/firebase.config'
import ProductsPage from '../components/ProductsPage'
import CreateContainer from '../components/CreateContainer'

const App = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          console.log(token);
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='w-screen h-auto flex flex-col bg-slate-100'>
          <Header />
          <main className='mt-14 md:mt-20 md:px-16 py-4 w-full'>
            <Routes>
              <Route path='/' element={<MainContainer />} />
              <Route path='/ProductsPage' element={<ProductsPage/>} />
              <Route path='/CreateContainer' element={<CreateContainer />} />
            </Routes>
          </main>
      </div>
    </Suspense>
  )
}

export default App