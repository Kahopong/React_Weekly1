
export const List = (props)=>{
    
    //Define Render links
    const renderLinks = (list) => {
        return list.map((link,i)=>{
            return(
                <div key={i} className='link-container-container d-flex justify-content-between align-items-center' >
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className='link-container nostyle d-flex justify-content-between align-items-center' key={i}>
                    <div className='link-name'>
                        {link.name}
                    </div>
                    <div className='tag-container'>
                    {link.tag.length>0 ? renderTags(link): <p className='no-tag-msg'>No tag</p>}
                    </div>                 
                    </a> 
                    <button className='del-link-btn d-flex justify-content-center align-items-center' onClick={()=>props.del(i)}>-</button>
                </div>   
            )
        })
    }

    //Define Render Tags (for each link)
    const renderTags = (link) => {
        return link.tag.map((tag,i)=>{
            return (
                <label className='tag' key={i}>#{tag}</label>
            )
        })
    }
    
    //Render the whole List Component
    return (
        <>
        <div className='list-container'>
        {props.list.length>0 ? renderLinks(props.list): <p className='no-links-msg'>Sorry, no links for you...</p>}
        </div>
        </>
    )
}