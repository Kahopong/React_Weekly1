import { useState } from "react";
import { Modal } from "react-bootstrap";

export const Add = (props)=>{
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [tag, setTag] = useState([]);
    const [url, setUrl] = useState('');

    const changeTag = (i,e) =>{
        let tagUpdate=[...tag]
        tagUpdate[i] = e.currentTarget.value
        setTag(tagUpdate)
    }

    //Pass Add link function to the parent AppKaho.js
    //Reset All states after adding
    const realAddLink = () =>{
      let checkUrl = url.split('.')
      if(checkUrl.length > 1 && checkUrl.filter((a)=> typeof a === 'string' && a.length>0).length === checkUrl.length){
        props.clickAdd(name, url, tag)
      } else{
        alert ('Invalid URL detected, please try again')
      } 
      setShow(false)
      setName('')
      setTag([])
      setUrl('')
    } 
    return (
        <>
        <button onClick={() => setShow(true)} className='add-link-btn'>Add a link!</button>

        {/* The Modal */}
        <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        className='d-flex justify-content-center'
        >
        <Modal.Header closeButton className='modal-title'>
            <Modal.Title>
              <h4 >Add Link</h4>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='add-link-container d-flex flex-column justify-content-between'>
          {/*  Name  */}
            <div className="question-box">
                <label>Name</label>
                <input className="question-input" type='text' onChange={(e)=>setName(e.currentTarget.value)} />
            </div>
          
          {/*  Url */}
            <div className="question-box">
                <label> URL </label>
                <input className="question-input" type='text' onChange={(e)=>setUrl(e.currentTarget.value)} />
            </div>

            {/*  Tags */}
            <div className="question-box">
                <label> Tags </label>
                {/* conditional: return tag input fields */}
                {tag.length == 0 ?
                <p className='add-tag-prompt'>*Click below to add tag</p> : tag.map((a, i) => {
                    return (
                      <input key={i} type="text" className="question-input" onChange={(e)=> changeTag(i,e)}/>
                    );
                  }) }
                <div className='d-flex justify-content-center'>
                <button className="add-tag-btn" onClick={()=>setTag([...tag,''])}> Add tag</button>
                </div>
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          {/* 4. Save Button */}
          <button  className='save-modal-btn' onClick={() => {
              realAddLink()
              setShow(false)
            }}>
            Save
          </button>
        </Modal.Footer>
        
        </Modal>

        </>
    )
}

