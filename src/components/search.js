import React from 'react'
import { SearchStyle, InputStyele } from '../styles/SearchStyle'
import Loop from  '../styles/Images/Vector.png'
import { useState } from 'react'

export default function Search() {
    const [query, setQuery] = useState('');
    const handleQuery = (e) => {
        setQuery(e.target.value)
    }
    
  return (
    <SearchStyle>
    
    <InputStyele  value={query} onChange={handleQuery}/>
    
    
    <img src={Loop} alt={"logo"}/>
    </SearchStyle>
  )
}
