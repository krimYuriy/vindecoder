import React from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Info from './pages/Info'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Route path={'/'} component={Home} exact />
      <Route path={'/variables'} component={Info} exact />
    </div>
  )
}

export default App;
