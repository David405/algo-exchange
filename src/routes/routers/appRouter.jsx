import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../../pages/dashboard/dashboard'
import { Trade } from '../../pages/trade/trade'
import { Transactions } from '../../pages/transactions/transactions'
import { Wallet } from '../../pages/wallet/wallet'

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Dashboard title="Dashboard" />} path="/" />
      <Route element={<Trade title="Trade" />} path="/trade" />
      <Route element={<Wallet title="Wallet" />} path="/wallet" />
      <Route element={<Transactions title="Transactions" />} path="/transactions" />
    </Routes>
  )
}
