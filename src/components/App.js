import React from 'react'
import Layout from './Layout/Layout';
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './Layout/Home/Home'
import Characters from './RickPage/Characters'
import Episodes from './RickPage/Episodes'

export default function App() {
  return (
    <BrowserRouter>
      <Layout/>
      <Route exact path='/' component={Home} />
      <Route exact path='/characters' component={Characters} />
      <Route exact path='/episodes' component={Episodes} />
    </BrowserRouter>
  )
}
