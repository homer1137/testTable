import React from 'react'
import { NavigationStyle } from '../styles/Navigation'
import {useParams, Link} from 'react-router-dom'

export default function Navigation({children, pages}) {
  const { id } = useParams();
  console.log('id', id)
  const pages2 = +pages

  const previousPage=()=>{
    if (+id>1) return(`/pages/${+id-1}`)
    else return 1
  }

  const previousPage2 = previousPage()

  function nextPage (){
    if(+id<pages2) return (`/pages/${+id+1}`)
    else return (`/pages/${pages2}`)
  }
  const nextPage2 = nextPage();
  


  return (
    <NavigationStyle>
    <Link style={{textDecoration: 'none', color: '#474955'}} to={previousPage2}>Назад</Link>
    {children}
    <Link style={{textDecoration: 'none', color: '#474955'}} to={nextPage2}>Далее</Link>
    </NavigationStyle>
  )
}
