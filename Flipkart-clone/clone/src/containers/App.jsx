import React, { Suspense, useEffect } from 'react'
import {Route, Routes} from "react-router-dom"
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import ProductsPage from '../components/ProductsPage'
import CreateContainer from '../components/CreateContainer'
import { useStateValue } from '../context/StateProvider'
import { getAllProductItems } from '../utils/firebaseFunctions'
import { actionType } from '../context/reducer'

const App = () => {
  
  const [{ProductItems} , dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllProductItems().then((data) => {
      dispatch({
        type: actionType.SET_PROD_ITEMS,
        ProductItems: data,
      })
    })
  }

  useEffect(() =>{
    fetchData();
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