import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Result from './components/Result/Result'
import Footer from './components/Footer/Footer'

export default props => {
  return (
    <div>
      <Header />

      <Search />

      <Result />

      <Footer/>
    </div>
  )
}