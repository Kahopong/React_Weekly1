import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export const Search = (props)=>{
    const [search, setSearch]= useState('')

    //Pass Search to parent Appkaho.js
    const realSearch = (e) =>{
        setSearch(e.currentTarget.value)
        props.clickSearch(e.currentTarget.value)
        // console.log('taget value', e.currentTarget.value)
        // console.log('search state', search)
    }
    return (
        <>
        <div className='search-container'>
        <input className='search-input' onChange={realSearch} placeholder='Search name, tag or url...'/><FontAwesomeIcon icon={faSearch} className='search-icon' />
        </div>
        </>
    )
}