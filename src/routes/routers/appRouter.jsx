import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../../pages/dashboard/dashboard'

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Dashboard title="Dashboard" />} path="/" />
      {/* <Route element={<Trade title="Trade" />} caseSensitive={true} path="/" /> */}
    </Routes>
  )
}
