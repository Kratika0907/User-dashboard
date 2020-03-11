import React,{useRef,useState,useEffect} from 'react'
import './modal.css'
 
const Modal = (props) => {
  const [showInterst,setInterst] = useState(false)
  const [userFormDetail , setUserFormDetail]= useState({
    Name:"",
    Company:"",
    Domain:"",
    College:"",
    Department:"",
    InterstValue:"",
    Resume:""
  })
  

  const handleFormSubmit=(event)=> {
    event.preventDefault();
    let x= document.getElementById("form").elements
    let userDetails = {...userFormDetail}
    for (var i in x){
      if (userDetails.hasOwnProperty(x[i].name))
      userDetails[x[i].name]=x[i].value;
    }
   setUserFormDetail(userDetails);
   //TODO: send this data to backend

  }
  const handleCloseModal = () => {
    localStorage.setItem("modalFlag","false")
  }

  const handleInterst = (event) => {
    if(event.target.id.includes('yes')){
      setInterst(true)
    }
    else {
      setInterst(false)
    }
  }
  return (
    <>
    {props.show=="true"? 
    <div className="modal-form">
    <span className="icon-wrapper" onClick={handleCloseModal}><i class="fa fa-close"></i></span>
    <form id="form"onSubmit={handleFormSubmit}>
    Name
    <input name="Name" type="text"/>
    Company
    <input name="Company" type="text"/>
    Domain
    <input name="Domain" type="text"/>
    College
    <input name="College" type="text"/>
    Department
    <input name="Department" type="text"/>
    <div className="interst" onClick={handleInterst}> Interst 
    Yes<input name="interst" id="yesInterst" type="radio"/>
    No<input name="interst" id="noInterst" type="radio"/>
    </div>
    {showInterst ? <input name="InterstValue" type="text"/> : null}
    Resume
    <textarea name="Resume"  placeholder="Enter resume details"
    />
    <input type="submit" value="Submit"/>
    </form>
    </div>:null}
    </>
  )
}

export default Modal;