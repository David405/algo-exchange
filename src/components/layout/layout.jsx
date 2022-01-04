import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from '../../routes'
import '../../vendor/css/style.css'
import { Navbar } from '../widgets/navbar'
import Sidebar from '../widgets/sidebar/sidebar'
import { MainContent, Wrapper } from './containers/'

export function Layout(props) {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <Wrapper>
          <MainContent title="Main content">
            <Navbar />
            <MainRouter />
          </MainContent>
        </Wrapper>
        {/*
        ALERT! Other components/ pages route  will stay inside the main
        ALERT! I am guessing logins and signup will have its on layout 
      */}
      </div>
    </BrowserRouter>
  )
}
