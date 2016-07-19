/**
  date : 2016-05-16
  author : sailing
  fun : 程序入口

**/

import React from 'react'
import { Link, browserHistory } from 'react-router'
import Container from './container'
import Left from './left'

export default function App({children}){
    return (
      <div>
        <Left />
        <Container chd={children} />
      </div>
    )
}
