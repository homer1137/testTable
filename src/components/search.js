import React from 'react'
import { SearchStyle, InputStyele } from '../styles/SearchStyle'
import Loop from  '../styles/Images/Vector.png'
import { useState, useEffect } from 'react'

export default function Search({search, setSearch}) {
    

    const handleSearch2 = (e) => {
        setSearch(e.target.value)
    }
    
  return (
    <SearchStyle>
    
    <InputStyele  value={search} onChange={handleSearch2}/>
    
    
    <img src={Loop} alt={"logo"}/>
    </SearchStyle>
  )
}
