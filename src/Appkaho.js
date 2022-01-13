//import css

import { useState, useEffect } from "react";
import {Add} from './Components/Add'
import {List} from './Components/List'
import {Search} from './Components/Search'

const Appkaho =()=>  {
    // localStorage.setItem("links", [])
    const storedLinks = localStorage.getItem("links");
    const parsedLinks = storedLinks != null && storedLinks.length >0 ? JSON.parse(storedLinks): [];
    let dummyLinks = [{name:'Google', url:'http://www.google.com', tag:['search','big data']},{name:'YouTube', url:'http://www.youtube.com', tag:['chill','entertainment']},{name:'Xccelerate', url:'https://xccelerate.co/en/', tag:['coding','academy']}]
    const [links, setLinks] = useState(parsedLinks);
    const [searchBar, setSearchBar] = useState('');

    const addLink = (name, url, tag) =>{
        let newLink = {name: name, url: url, tag: tag}
        setLinks([...links, newLink])
        localStorage.setItem("links", JSON.stringify([...links, newLink]))
    }

    const searchLink = (search)=>{
        setSearchBar(search)
    }

    const filter = (search) =>{
        search = search.toLowerCase()
        let filtered =  links.filter((link)=>{
            return (
                link.name.toLowerCase().indexOf(search) > -1 ||  //Check name (exist return true)
                link.url.toLowerCase().indexOf(search) > -1 ||  //Check url (exist return true)
                link.tag.some((tag)=> tag.toLowerCase().indexOf(search) > -1) //Check each tag in tag array (exist return true)
            )
        })
        return filtered
    }

    const clearAll = () =>{
        localStorage.setItem("links", [])
        setLinks([])
    }

    const dummy = ()=>{
        setLinks([...dummyLinks])
        localStorage.setItem("links", JSON.stringify(dummyLinks))
    }

    const del = (i)=>{
        let afterDel = links.filter((link,index)=>index!=i)
        setLinks(afterDel)
    }

    return (
    <>
      <div className='display d-flex justify-content-center align-items-center'>
        <div className='page'>
            <div id="header" className='d-flex justify-content-center'>
                <h6> <mark>Linktop Republic</mark> | Save links on iPhone </h6>
            </div>
            <div className='main-body-container'>
                <h1 className='section-title'>My Links</h1>
                <div className='section-content'>
                    <Add clickAdd={addLink}/>
                    <button className='clear-all-btn' onClick={()=>clearAll()}>Clear All!</button>
                    <button className='dummy-btn' onClick={()=>dummy()}>:)</button>
                    <List list={filter(searchBar)} del={del}/>
                </div>
            </div>
                <Search clickSearch={searchLink}/>
        </div>
      </div>
    </>
    )
}

export default Appkaho;