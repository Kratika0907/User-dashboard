import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import './userdetail.css'


export const UserDetail = () => {
  const [contentFlag,setContentFlag] = useState(false);
  const [contentClass , setContentClass] = useState("icon");
  const [userId , setUserId] = useState(useParams().id);
  
  // do the axios call when the component mount 
  // useEffect(function updateTitle() {
  //  let {id} = useParams();
  //   setUserId(id);
  // });
  


  const  handleExtraContent = () => {
    setContentFlag(!contentFlag)
      let m = contentClass; 
      let x = m.split(' ');      
    if (!contentFlag) {
     let  a = [x[0]];
     a.push("up");
     let  b = a.join(' ')
     setContentClass(b);
    }
    else {
      setContentClass(x[0]);
    }  
  }
  
  

  return (
    <div className="detail-container">{userId}
    <header> 
    <figure>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8_r3eMoDydUVUydgfCPqmPaR7t44M6N10sUdE_xkS32DxkrY&s"/>
    <figcaption>Name</figcaption>
     </figure>
     <div> interst1 | interst2 |interst3 </div>
    </header>
    <hr/>
    <article className="sub-header"> 
    <div> Work </div>
    <div> Education </div>
    </article>
    <hr/>
    <nav>
    <button> One </button>
    <button> Two </button>
     </nav>
     <article className="content">
     Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
      </article>
     {contentFlag ?<article> College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</article> : null} 
      <section>
      <div  onClick={handleExtraContent} className={contentClass}> 
      <i class="fa fa-arrow-down" ></i></div>
      <span> view {!contentFlag ? "more" :"less"} </span>
      </section>
      
    </div>
  )
}

