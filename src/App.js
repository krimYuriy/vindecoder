import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Info from './pages/Info'
import InfoItem from './pages/InfoItem'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/variables' component={Info} exact />
        <Route path='/variables/:variableId' component={InfoItem} />
      </Switch>
    </div>
  )
}

export default App;
