import React , {Suspense} from 'react'
import {Routes , Route } from "react-router-dom"
import Layout from '../Layouts/Layout'
import AdminLayout from '../Layouts/AdminLayout'
import { Home,UserProfile } from '../pages'

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path ="/" element={<Home />} />
            <Route path ="/profile/:uid" element={<UserProfile />} />

            {/* admin layout*/}
            <Route path="/admin" element={<AdminLayout />}>
              
            </Route>
          </Route>
        </Routes>
    </Suspense>
  )
}

export default App