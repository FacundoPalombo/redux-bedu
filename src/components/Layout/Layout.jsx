import React, { Component } from 'react'
import './Layout.css'
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <Home/>
      </>
    )
  }
}