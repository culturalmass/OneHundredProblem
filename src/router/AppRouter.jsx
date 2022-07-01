import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { OneHundredProblemPage } from '../HundredProblem/OneHundredProblemPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<OneHundredProblemPage /> } />
    </Routes>
  )
}
